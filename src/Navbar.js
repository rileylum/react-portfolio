import React from "react";
import NavLink from "./NavLink";

function Navbar({pages = ["About Me", "Portfolio", "Contact", "Resume"]}) {
    return (
        <nav>
            {pages.map(page => {
                return <NavLink page={page}/>
            })}
        </nav>
    );
};

export default Navbar;