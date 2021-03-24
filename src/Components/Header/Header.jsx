import header_logo from "../../images/header_logo.svg"
import React from "react"

function Header() {
    return (
        <header>
            <img className="header_logo"
                 src={header_logo} alt="logo" id="head_logo_id"/>
        </header>
    )
}

export default Header