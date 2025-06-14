import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoList from "./TodoList";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <TodoList />
    <Login/>
  </>
);
