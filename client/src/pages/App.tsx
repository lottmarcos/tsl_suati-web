import React from "react";
import logo from "../assets/logo.svg";
import { AuthContextProvider } from "../contexts/AuthContext";
import "../css/App.css";
import { RouterApp } from "../routes";

function App() {
  return (
    <AuthContextProvider>
      <RouterApp />
    </AuthContextProvider>
  );
}

export default App;
