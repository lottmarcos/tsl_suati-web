import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Member = () => {
  const [member, setMember] = useState({});

  const params = useParams();
  const id = params.id;

  const fetchMember = (id) => {
    axios
      .post("http://localhost:8800/api/member/getData", {
        id: id,
      })
      .then((res) => {
        setMember(res.data);
      });
  };

  useEffect(() => {
    fetchMember(id);
  }, [id]);

  return (
    <div>
      <h1>Nome: {member?.name}</h1>
      <h2>Subsistema: {member?.subsystemName}</h2>
      <h2>Sistema: {member?.systemName}</h2>
      <h2>Cargo: {member?.roleName}</h2>
    </div>
  );
};
