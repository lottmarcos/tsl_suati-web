import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Admin,
  Finances,
  Home,
  Login,
  Member,
  Register,
  Subsystem,
  System,
  Team,
} from "../pages";

export const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/administrador" element={<Admin />} />
        <Route path="/time" element={<Team />} />
        <Route path="/membro:id" element={<Member />} />
        <Route path="/subsistema/:id" element={<Subsystem />} />
        <Route path="/sistema/:id" element={<System />} />
        <Route path="/financeiro" element={<Finances />} />
      </Routes>
    </Router>
  );
};
