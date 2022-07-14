import React from "react";
import Stack from "react-bootstrap/Stack";
import Footer from "../Footer";
import Dropdown from "react-bootstrap/Dropdown";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Torres Fitness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/programs">
                Programs
              </Link>

              <Link className="nav-link" to="/about">
                About Me
              </Link>
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
          <Dropdown className="user-icon">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/login-admin">Admin User</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/#">Signup Comming Soon</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
