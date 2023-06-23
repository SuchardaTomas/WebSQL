import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-home" id="house" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Produkty
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">
            Kontakty
          </Link>
        </li>
      </ul>
    </div>
    <form className="d-flex ms-auto">
      <input className="form-control me-2" type="search" placeholder="Hledat" />
      <button className="btn btn-outline-primary" type="submit">
        Hledat
      </button>
    </form>
    <Link to="/cart" className="nav-item nav-link active">
      <h5 className="px-5 cart">
        <i className="fas fa-shopping-cart" /> Košík
        <span id="cart_count">0</span>
      </h5>
    </Link>
  </div>
</nav>

  );
};

export default Header;
