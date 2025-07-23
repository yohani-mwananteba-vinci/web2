import './Header.css'

interface HeaderProps {
    logo: string;
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