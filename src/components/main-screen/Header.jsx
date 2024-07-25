import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          {/* <a className="navbar-brand" href="index.html">
            <img src={"src/assets/images/logo.png"} alt="" />
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse mt-3 mb-3 navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link to='/home'  className="nav-link" href="index.html">
                    Inicio <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="catalogo.pdf">Catálogo </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="jewellery.html">
                    Jewellery
                  </a>
                </li> */}
                <li className="nav-item">
                  <Link to='/contacto' className="nav-link" href="contact.html">
                    Contactanos
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="quote_btn-container ">
              <a href="">
                <img src="images/cart.png" alt="" />
                <div className="cart_number">0</div>
              </a>
              {/* <form className="form-inline">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                ></button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
