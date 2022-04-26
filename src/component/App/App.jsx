import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { TodosList } from '../Todos/TodosList/TodosList'
import { PhotoAlbum } from '../Photos/PhotoAlbum/PhotoAlbum'
import { SingleTodo } from "../Todos/SingleTodo/SingleTodo";


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
