import { db } from "../connect.js";

export const getData = (req, res) => {
  // Caio
  //TODO: Selecionar subsistema específico
  const { id } = req.body;
  const q = "SELECT name FROM subsystems WHERE id = ?";

  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) res.status(404).json("Subsistema não encontrado");
    res.send(data[0]);
  });
};

export const getMembersHours = (req, res) => {
  // Luiza
  //TODO: Selecionar membros do subsistema com o período trabalhado na semana
};

export const getSprints = (req, res) => {
  // Caio
  //TODO: Selecionar sprints do subsistema
  const { id } = req.body;
  const q = "SELECT * FROM sprints WHERE userId = ?;";

  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhuma sprint encontrada.");
    res.send(data);
  });
};

export const getTasks = (req, res) => {
  // Luiza
  //TODO: Selecionar tasks do subsistema
  const { id } = req.body;
  const q = "SELECT * FROM tasks WHERE userId = 8;";

  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhuma tarefa encontrada.");
    res.send(data);
  });
};

export const getFills = (req, res) => {
  // Caio
  //TODO: Selecionar preenchimentos do subsistema
  const { id } = req.body;
  const q =
    "SELECT f.userId, f.description, f.timeBegin, f.timeEnd, f.macroId, f.microId, f.complementoId, f.IsAtCPH, f.duration " +
    "FROM fills AS f " +
    "INNER JOIN jobs AS j ON j.userId = f.userId " +
    "WHERE subsystemId = ?;";
  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhum preenchimento encontrado.");
    res.send(data);
  });
};

export const insertSprint = (req, res) => {
  // Luiza
  //igual de  membros so copiar
  //TODO: Inserir sprint no DB (óbvio)
  const { name } = req.body;
  const q = "INSERT INTO sprint (name) VALUES (?)";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Inserido com sucesso!");
  });
};

export const updateSprint = (req, res) => {
  // Caio
  //igual de  membros so copiar
  //TODO: Atualizar sprint existente
};

export const insertTask = (req, res) => {
  // Luiza
  const { name } = req.body;
  const q = "INSERT INTO task (name) VALUES (?)";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Inserido com sucesso!");
  });
};

export const updateTask = (req, res) => {
  // Caio
};
