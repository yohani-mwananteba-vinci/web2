import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  theme: string; // C: Il fallait que le type de theme soit "Light" ou "Dark" => "theme: "Light" | "Dark";"
  children: React.ReactNode;
}

const Footer = ({ urlLogo, theme, children }: FooterProps) => {
  // C: - Pour le footer, pas besoin de changer le css, on pouvait utiliser:
  // <footer className="footer" style={{
  //   backgroundColor: theme === "dark" ? "black" : "white",
  //   color: theme === "dark" ? "white" : "black",
  // }}></footer>
  return (
    <footer className={theme === "Light" ? "footer-light" : "footer-dark"}>
      <div>{children}</div>
      <img src={urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
