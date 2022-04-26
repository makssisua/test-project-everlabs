import React from "react";
import { Link, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around">
          <span className="navbar-brand mb-0 h1">Test Project</span>
          <span className="d-flex gap-2">
            <Link to="/todos">
              <button type="button" className="btn btn-primary">Todos</button>
            </Link>
            <Link to="/photos">
              <button type="button" className="btn btn-primary">Photos</button>
            </Link>
          </span>
        </div>
      </nav>

      <main className="d-flex justify-content-center mt-5">
        <div className="d-flex flex-column">
          <Outlet />
        </div>
      </main>
    </>
  );
}
