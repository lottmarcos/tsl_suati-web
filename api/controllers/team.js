import { db } from "../connect.js";

export const getTeamData = (req, res) => {
  /*TODO: muito complexo pra comentar mas here we go

    Função que retorna um objeto que tem este formato:
    {
        capitao: {id,name},
        sistemas: [{nome, id, diretorGeral: {nome,id}, subsistemas: [{nome,id}]}]
    }
    
    espero que tenha ficado claro pra quem ta lendo*/
};

export const getMembers = (req, res) => {
  //TODO: Selecionar membros de um sistema agrupados por subsistema
};
