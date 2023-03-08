import axios from "axios";

export const getSystems = () => {
  return axios.get("http://localhost:8800/api/auth/getSystems");
};

export const getSubsystems = (id: number) => {
  return axios.post("http://localhost:8800/api/auth/getSubsystems", { id });
};

export const getRoles = () => {
  return axios.get("http://localhost:8800/api/auth/getRoles");
};
