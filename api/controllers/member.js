import { db } from "../connect.js";

export const getData = (req, res) => {
  //TODO: Seleciona os dados pessoais de um usuário
};

export const getSprints = (req, res) => {
  //TODO: Selecionar sprints de um membro
};

export const getDebt = (req, res) => {
  //TODO: Selecionar dividas de um membro
};

export const getFills = (req, res) => {
  //TODO: Selecionar preenchimentos de um membro de acordo com o período selecionado pelo usuário
};

export const insertFill = (req, res) => {
  //TODO: Inserir preenchimento
  res.send("funcionando!");
};

export const deleteFill = (req, res) => {
  //TODO: Inserir preenchimento
};

export const insertSprint = (req, res) => {
  //TODO: Inserir sprint no DB (óbvio)
};

export const updateSprint = (req, res) => {
  //TODO: Atualizar sprint existente
};
