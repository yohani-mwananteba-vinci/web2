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

// C: Solution alternative avec Link:
// const NavBar = () => (
//   <nav className="navbar">
//     <Link to="/">Home</Link>
//     <Link to="/cinemas">Cinemas</Link>
//     <Link to="/movie-list">My favorite movies</Link>
//   </nav>
// );

export default NavBar;