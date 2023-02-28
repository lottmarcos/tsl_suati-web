import { db } from "../connect.js";

export const getSubsystemData = (req, res) => {
  //TODO: Selecionar subsistema específico
};

export const getMembersHours = (req, res) => {
  //TODO: Selecionar membros do subsistema com o período trabalhado na semana
};

export const getSprints = (req, res) => {
  //TODO: Selecionar sprints do subsistema
};

export const getTasks = (req, res) => {
  //TODO: Selecionar tasks do subsistema
};

export const getFills = (req, res) => {
  //TODO: Selecionar preenchimentos do subsistema
};

export const insertSprint = (req, res) => {
  //igual de  membros so copiar
  //TODO: Inserir sprint no DB (óbvio)
};

export const updateSprint = (req, res) => {
  //igual de  membros so copiar
  //TODO: Atualizar sprint existente
};

export const insertTask = (req, res) => {};

export const updateTask = (req, res) => {};
