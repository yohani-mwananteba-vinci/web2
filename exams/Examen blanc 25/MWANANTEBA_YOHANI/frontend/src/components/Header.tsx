import "./Header.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <footer
      className="header"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div>{children}</div>
    </footer>
  );
};

export default Header;
