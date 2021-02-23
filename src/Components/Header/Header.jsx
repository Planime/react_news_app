import header_logo from "../../images/header_logo.svg"

function Header() {
    return (
        <header>
            <img  className="header_logo"
                  src={header_logo} alt=""/>
        </header>
    )
}

export default Header