import { db } from "../connect.js";

export const getTeamData = (req, res) => {
  // Luiza
  /*TODO: muito complexo pra comentar mas here we go

    Função que retorna um objeto que tem este formato:
    {
        capitao: {id,name},
        sistemas: [{nome, id, diretorGeral: {nome,id}, subsistemas: [{nome,id}]}]
    }
    
    espero que tenha ficado claro pra quem ta lendo*/
};

export const getMembers = (req, res) => {
  // Caio
  //TODO: Selecionar membros de um sistema agrupados por subsistema
  const { id } = req.body;
  const q =
    "SELECT j.subsystemId, s.name, GROUP_CONCAT(j.userId) AS usersIds, GROUP_CONCAT(u.name) as usersNames, GROUP_CONCAT(u.profilePic) as usersPics " +
    "FROM jobs AS j " +
    "INNER JOIN users AS u ON j.userId = u.id " +
    "INNER JOIN subsystems AS s ON j.subsystemId = s.id " +
    "WHERE s.systemId = ? " +
    "GROUP BY subsystemId;";
  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("Nenhum subsistema encontrado");
    res.send(data);
  });
};
