import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { SubsystemService } from "../../services/Subsystem";
import { ISubsystem } from "./types";

interface IState {
  subsystem: ISubsystem;
}

export const Subsystem = () => {
  const [state, setState] = useState<IState>({
    subsystem: {} as ISubsystem,
  });

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    SubsystemService.fetchSubsystem(id).then((res) =>
      setState({ ...state, subsystem: res.data })
    );
  }, [id]);

  const { subsystem } = state;

  return (
    <div>
      <h1>{subsystem?.name}</h1>
    </div>
  );
};
