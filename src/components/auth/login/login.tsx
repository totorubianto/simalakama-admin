import React from "react";

interface Props {}

const login: React.FC<Props> = () => {
  return (
    <div>
      <div className="bg-default" style={{ height: "100vh" }}>
        <nav
          id="navbar-main"
          className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
        >
          <div className="container">
            <a className="navbar-brand" href="dashboard.html">
              <img alt="" src="../assets/img/brand/white.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-controls="navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse navbar-custom-collapse collapse"
              id="navbar-collapse"
            >
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="dashboard.html">
                      <img alt="" src="../assets/img/brand/blue.png" />>
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbar-collapse"
                      aria-controls="navbar-collapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="dashboard.html" className="nav-link">
                    <span className="nav-link-inner--text">Dashboard</span>
                  </a>
                </li>
              
              </ul>
              <hr className="d-lg-none" />
              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                  <a href="login.html" className="nav-link">
                    <span className="nav-link-inner--text">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="register.html" className="nav-link">
                    <span className="nav-link-inner--text">Register</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-content">
          <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                x="0"
                y="0"
                viewBox="0 0 2560 100"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
                <div className="card bg-secondary border-0 mb-0">
               
                  <div className="card-body px-lg-5 py-lg-5">
                    <form>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-merge input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-lock-circle-open"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label className="custom-control-label">
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <button type="button" className="btn btn-primary my-4">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <a href="#/" className="text-light">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="col-6 text-right">
                    <a href="#/" className="text-light">
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default login;
