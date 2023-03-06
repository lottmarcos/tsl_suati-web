import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const System = () => {
  const [system, setSystem] = useState({ name: "" });

  const params = useParams();
  const id = params.id;

  useEffect(() => {}, [id]);

  return <div>System - {id}</div>;
};
