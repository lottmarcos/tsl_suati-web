import { db } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import util from "util";

export const register = (req, res) => {
  var id;

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Usuário já existe!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const query = util.promisify(db.query).bind(db);
    const q2 =
      "INSERT INTO jobs (userId ,systemId, subsystemId, roleId) VALUE (?)";

    let values2;

    (async () => {
      try {
        await query(
          "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES ('" +
            req.body.username +
            "','" +
            req.body.email +
            "','" +
            hashedPassword +
            "','" +
            req.body.name +
            "')"
        );
      } finally {
        (async () => {
          try {
            const teste = await query(
              "SELECT id FROM users WHERE username='" + req.body.username + "'"
            );
            id = teste[0].id;
            values2 = [id, req.body.system, req.body.subsystem, req.body.role];
          } finally {
            db.query(q2, [values2], (err) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json("Usuário criado!");
            });
          }
        })();
      }
    })();
  });
};

export const getSystems = (req, res) => {
  //TODO: pegar todos sistemas
};

export const getSubsystems = (req, res) => {
  //TODO: selecionar subsistemas de um certo sistema
};

export const getRoles = (req, res) => {
  //TODO: selecionar funções
};

export const login = (req, res) => {
  const { username, password } = req.body;
  const q = "SELECT * FROM users WHERE username=? ";

  db.query(q, username, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Usuário não encontrado");
    const checkPassword = bcrypt.compareSync(password, data[0].password);
    if (!checkPassword)
      return res.status(400).json("Combinação de senha errada");
    const token = jwt.sign(
      {
        id: data[0].userId,
        role: data[0].roleId,
        system: data[0].systemId,
        subsystem: data[0].subsystemId,
      },
      "secretkey"
    );

    res
      .cookie("accessToken", token, {
        httpOnly: false,
      })
      .status(200)
      .json(token);
  });
};
