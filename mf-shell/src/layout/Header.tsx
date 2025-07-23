import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand mb-0 h1">
        Rick & Morty MFE
      </Link>
    </div>
  </nav>
);

export default Header;
