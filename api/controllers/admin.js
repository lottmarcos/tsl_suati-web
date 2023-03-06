import { db } from "../connect.js";

export const insertSprint = (req, res) => {
  // Caio
  //TODO: Inserir sprint no DB (óbvio)
  const { id, description, deadline } = req.body;
  const q = "INSERT INTO sprints (userId, description, deadline) VALUE (?);";
  let values = [id, description, deadline];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Sprint armazenada.");
  });
};

export const insertMacro = (req, res) => {
  const { name } = req.body;
  const q = "INSERT INTO macros (name) VALUES (?)";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Inserido com sucesso!");
  });
};

export const insertMicro = (req, res) => {
  const { name } = req.body;
  const q = "INSERT INTO micros (name) VALUES (?)";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Inserido com sucesso!");
  });
};

export const insertComplement = (req, res) => {
  // Luiza
  //TODO: Mesma coisa que os de cima mas com complemento
};

export const getMembers = (req, res) => {
  //Caio
  //TODO: Pegar membros que o user pode editar
};

export const getMemberData = (req, res) => {
  //Luiza
  //TODO: Pegar informações do membro escolhido para ser editado
};

export const updateMember = (req, res) => {
  //funcionando!!
  // Caio
  //TODO: Atualizar membro já existente
  const { member, role, system, subsystem } = req.body;
  const q =
    "UPDATE jobs " +
    "SET subsystemId = ?, systemId=?, roleId = ? " +
    "WHERE userId = ?;";
  let values = [subsystem, system, role, member];
  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Atualizado com sucesso!");
  });
};

export const deleteMember = (req, res) => {
  // Luiza
  //TODO: Deletar membro já existente
};
