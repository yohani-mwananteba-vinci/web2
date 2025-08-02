import "./Footer.css";

interface FooterProps {
  lastname: string;
  firstname: string;
  children: React.ReactNode;
}

const Footer = ({lastname, firstname, children}: FooterProps) => {
  return (
    <footer>
        <div>{children}</div>
        <p>Developpé par {lastname} {firstname}</p>
    </footer>
  );
};

export default Footer;