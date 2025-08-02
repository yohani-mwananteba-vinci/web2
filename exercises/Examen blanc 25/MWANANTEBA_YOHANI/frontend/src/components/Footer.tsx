import "./Footer.css";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <p>© Mwana-Nteba Yohani</p>
      <div>{children}</div>
    </footer>
  );
};

export default Footer;
