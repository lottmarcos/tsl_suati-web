import { db } from "../connect.js";

export const getData = (req, res) => {
  // Caio
  //TODO: Seleciona os dados pessoais de um usuário (FALTA INFORMAÇÕES AINDA!!!)

  const { id } = req.body;
  const q =
    "SELECT u.name, j.subsystemId, subsys.name as subsystemName, j.systemId, sys.name as systemName, j.roleId , r.name as roleName, u.school, j.admission FROM users AS u " +
    "INNER JOIN jobs AS j ON u.id = j.userId " +
    "INNER JOIN subsystems AS subsys ON subsys.id = j.subsystemId " +
    "INNER JOIN systems AS sys ON sys.id = j.systemId " +
    "INNER JOIN roles AS r ON r.id = j.roleId " +
    "WHERE u.id = ?;";

  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Membro não encontrado");
    res.send(data[0]);
  });
};

export const getSprints = (req, res) => {
  // Luiza
  //TODO: Selecionar sprints de um membro
};

export const getDebt = (req, res) => {
  // Caio
  //TODO: Selecionar dividas de um membro
};

export const getFills = (req, res) => {
  // Luiza
  //TODO: Selecionar preenchimentos de um membro de acordo com o período selecionado pelo usuário
};

export const getMacros = (req, res) => {
  const q = "SELECT * FROM macros";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhum macro encontrado.");
    res.send(data);
  });
};

export const getMicros = (req, res) => {
  const q = "SELECT * FROM micros";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhum macro encontrado.");
    res.send(data);
  });
};

export const getComplements = (req, res) => {
  const q = "SELECT * FROM complements";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhum macro encontrado.");
    res.send(data);
  });
};

export const insertFill = (req, res) => {
  // Caio
  //TODO: Inserir preenchimento (FALTA FAZER A DATA FUNCIONAR)
  const {
    id,
    description,
    timeBegin,
    timeEnd,
    microId,
    macroId,
    cph,
    duration,
  } = req.body;
  const q =
    "INSERT INTO fills (userId, description, timeBegin, timeEnd, microId, macroId, isAtCPH, duration) VALUE (?)";
  let values = [
    id,
    description,
    timeBegin,
    timeEnd,
    microId,
    macroId,
    cph,
    duration,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Preenchimento armazenado!");
  });
};

export const deleteFill = (req, res) => {
  // Luiza
  //TODO: Deletar preenchimento
};

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

export const updateSprint = (req, res) => {
  // Luiza
  //TODO: Atualizar sprint existente
};
