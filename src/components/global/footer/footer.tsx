import React from "react";

interface Props {}

const footer: React.FC<Props> = () => {
  return (
    <div>
      <footer className="py-5" id="footer-main">
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                  &copy; 2020{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold ml-1"
                  >
                    Creative Tim
                  </a>
                </div>
              </div>
              <div className="col-xl-6">
                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com" className="nav-link">
                      Creative Tim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="nav-link"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="http://blog.creative-tim.com" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                      className="nav-link"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default footer;
