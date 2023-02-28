import { db } from "../connect.js";

export const getData = (req, res) => {
  // Caio
  //TODO: Seleciona os dados pessoais de um usuário
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

export const insertFill = (req, res) => {
  // Caio
  //TODO: Inserir preenchimento
  res.send("funcionando!");
};

export const deleteFill = (req, res) => {
  // Luiza
  //TODO: Inserir preenchimento
};

export const insertSprint = (req, res) => {
  // Caio
  //TODO: Inserir sprint no DB (óbvio)
};

export const updateSprint = (req, res) => {
  // Luiza
  //TODO: Atualizar sprint existente
};
