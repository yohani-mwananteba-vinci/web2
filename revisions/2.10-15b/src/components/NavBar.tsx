import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movies")}> Move Lists</button>
      <button onClick={() => navigate("/addMovie")}> Add a movie</button>
    </nav>
  );
};

export default NavBar;
