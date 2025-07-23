import "./Footer.css";

interface FooterProps {
  logo: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <div>{props.children}</div>
      <img src={props.logo} alt="" />
    </footer>
  );
};

export default Footer;
