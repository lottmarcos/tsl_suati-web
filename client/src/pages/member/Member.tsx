import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MemberService } from "../../services/Member";
import { IMember } from "./types";

interface IState {
  member: IMember;
}

export const Member = () => {
  const [state, setState] = useState<IState>({
    member: {} as IMember,
  });

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    MemberService.fetchMember(id).then((res) =>
      setState({ ...state, member: res.data })
    );
  }, [id]);

  const { member } = state;

  return (
    <div>
      <h1>Nome: {member?.name}</h1>
      <h2>Subsistema: {member?.subsystemName}</h2>
      <h2>Sistema: {member?.systemName}</h2>
      <h2>Cargo: {member?.roleName}</h2>
      <h2>Curso: {member?.school}</h2>
      <h2>Admissão: {member?.admission}</h2>
    </div>
  );
};
