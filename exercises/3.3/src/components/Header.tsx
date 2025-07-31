import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  theme: string; // C: Il fallait que le type de theme soit "Light" ou "Dark" => "theme: "Light" | "Dark";"
  switchTheme: () => void;
  children: React.ReactNode;
}

// C:
// - Pour le footer, pas besoin de changer le css, on pouvait utiliser:
// <footer
//   className="header"
//   style={{
//     backgroundColor: theme === "dark" ? "black" : "white",
//     color: theme === "dark" ? "white" : "black",
//   }}
// >

// - Pour le button, on pouvait rajouter (plus simple que changer le css):
// <button
//   onClick={handleThemeChange}
//   style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
// >

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
