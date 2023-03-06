import axios from "axios";
import { SprintFormValues } from "../pages/admin/types";

export const insertSprint = (values: SprintFormValues) => {
  axios.post("http://localhost:8800/api/admin/insertSprint", {
    id: values.members,
    description: values.task,
    deadline: values.deadline,
  });
};

export const insertMacro = (name: string) => {
  axios.post("http://localhost:8800/api/admin/insertMacro", { name });
};

export const insertMicro = (name: string) => {
  axios.post("http://localhost:8800/api/admin/insertMicro", { name });
};

export const insertComplement = (name: string) => {
  axios.post("http://localhost:8800/api/admin/insertComplement", { name });
};

export const getMembers = () => {
  return axios.get("http://localhost:8800/api/admin/getMembers");
};
