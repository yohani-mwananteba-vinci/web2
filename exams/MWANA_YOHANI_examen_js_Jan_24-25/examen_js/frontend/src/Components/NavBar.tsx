import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/support">Create a ticket</Link>
    </nav>
  );
};

export default NavBar;