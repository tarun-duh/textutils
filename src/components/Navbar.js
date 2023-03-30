import React from "react";
import PropTypes from "prop-types";

export default function Navbar({
  mode,
  title,
  about,
  toggleMode,
  toggleMode2,
}) {
  //function

  return (
    <div>
      <nav
        className={` border border-bottom-2 border-primary navbar navbar-expand-lg navbar-${mode} bg-${mode} text-${
          mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="mx-4 nav-link" href="/">
                  {about}
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                onClick={toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                navy dark mode
              </label>
            </div>
            <div
              className={`form-check mx-4 form-switch text-${
                mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                onClick={toggleMode2}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                red dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "title goes here",
  about: "About us",
};
