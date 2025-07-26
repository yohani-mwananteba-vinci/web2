import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinemas")}>Cinemas</button>
      <button onClick={() => navigate("/movies")}>Movies</button>
    </nav>
  );
};

export default NavBar;