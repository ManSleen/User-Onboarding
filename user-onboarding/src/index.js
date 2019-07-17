import React from "react";
import ReactDOM from "react-dom";

import UserForm from "./components/UserForm";

import "./styles.css";

const App = () => {
  return <UserForm />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
