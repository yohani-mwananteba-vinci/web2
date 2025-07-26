import NavBar from "../Navbar/Navbar";
import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
}
// C: OK mais plus clair si on met NavBar dans Header les childrens de Header (pas dans le component Header directement => Voir App.tsx)
const Header = (props: HeaderProps) => {
  return (
    <footer className="header">
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
      <div className="header--navbar">
        <NavBar />
      </div>
    </footer>
  );
};

export default Header;
