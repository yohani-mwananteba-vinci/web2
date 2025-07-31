import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  theme: string;
  switchTheme: () => void;
  children: React.ReactNode;
}

const Header = ({ urlLogo, theme, switchTheme, children }: HeaderProps) => {
  return (
    <footer className={theme === "Light" ? "header-light" : "header-dark"}>
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
      <button onClick={switchTheme}>
        {theme === "Light" ? "Light Mode" : "Dark Mode"}
      </button>
    </footer>
  );
};

export default Header;
