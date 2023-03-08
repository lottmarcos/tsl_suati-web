import { db } from "../connect.js";

export const insertSprint = (req, res) => {
  // Caio
  //TODO: Inserir sprint no DB (óbvio)
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
  const { name } = req.body;
  const q = "INSERT INTO complements (name) VALUES (?)";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Inserido com sucesso!");
  });
};

export const updateMember = (req, res) => {
  // Caio
  //TODO: Atualizar membro já existente
};

export const deleteMember = (req, res) => {
  // Luiza
  //TODO: Deletar membro já existente
  const { name } = req.body;
  const q = "DELETE FROM members WHERE memberName = ?";

  db.query(q, name, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Deletado com sucesso!");
  });
};
