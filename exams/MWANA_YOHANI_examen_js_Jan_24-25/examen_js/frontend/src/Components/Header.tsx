import "./Header.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({children}: HeaderProps) => {
  return (
    <header>
      <div>{children}</div>
    </header>
  );
};

export default Header;