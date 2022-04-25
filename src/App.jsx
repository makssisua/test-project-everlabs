import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./component/Layout/Layout";
import { TodosList } from './component/todos/todosList'
import { PhotoAlbum } from './component/photos/photoAlbum'
import { SingleTodo } from "./component/todos/singleTodo";


export const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/todos" element={<TodosList />} />
            <Route path="/todos/:id" element={<SingleTodo />} />
            <Route path="/photos" element={<PhotoAlbum />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem", fontWeight: "bold" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </div>
  );
}
