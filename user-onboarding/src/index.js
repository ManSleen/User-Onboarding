import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  return <div>I'm the app</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
