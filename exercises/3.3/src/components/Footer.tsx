import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  theme: string;
  children: React.ReactNode;
}

const Footer = ({ urlLogo, theme, children }: FooterProps) => {
  return (
    <footer className={theme === "Light" ? "footer-light" : "footer-dark"}>
      <div>{children}</div>
      <img src={urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
