import { Link } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticatedUser } from "../../types";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
}
const NavBar = ({ authenticatedUser }: NavBarProps) => {
  if (authenticatedUser) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/books">Library</Link>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Library</Link>
    </nav>
  );
};

export default NavBar;
