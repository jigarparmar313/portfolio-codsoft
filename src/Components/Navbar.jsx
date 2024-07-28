// import { a } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container pt-5" id="home" data-aos="fade-down" data-aos-duration="1000">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
              <a className="navbar-brand" href="#home">
                <span className="fw-bold fs-3">
                JigarPortfolio
                </span>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/"
                      end
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#experience"
                    >
                      Experience
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#skills"
                    >
                      Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
