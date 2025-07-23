import './Header.css'

interface HeaderProps {
    logo: string;               //C: "urlLogo" aurait été plus explicite
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <img src={props.logo} alt="" />
            <div>{props.children}</div>
        </header>
    )
}

export default Header;