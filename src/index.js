import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './component/App/App';
import { BrowserRouter } from "react-router-dom";
import { TodosListProvider } from "./context/todosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodosListProvider>
        <App />
      </TodosListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
