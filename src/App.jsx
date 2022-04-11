import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./component/layout/layout";
import { TodosList } from './component/todos/todosList'
import { PhotoAlbum } from './component/photos/photoAlbum'
import { SingleTodo } from "./component/todos/singleTodo";


export const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="todos" element={<TodosList />} />
            <Route path="todos/:id" element={<SingleTodo />} />
            <Route path="photos" element={<PhotoAlbum />} />
          </Route>
        </Routes>
      </div>
  );
}
