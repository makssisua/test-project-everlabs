import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { TodosListProvider } from "./component/context/todosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosListProvider>
        <App />
      </TodosListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
