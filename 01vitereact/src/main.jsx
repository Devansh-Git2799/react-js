import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// Internally these JSX gets converted into tree structure i.e in the form of objs so what we can do is

// here we can add evaluated expression i.e variables can also be evaluated as expression and passed as parameter to the createElement

const anotherEle = "DEVANSH MEHTA";

const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "Visit Google",
  anotherEle
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
