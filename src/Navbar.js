import React from "react";
import NavLink from "./NavLink";

function Navbar() {
    return (
        <nav>
            <NavLink page="About Me"/>
            <NavLink page="Portfolio"/>
            <NavLink page="Contact"/>
            <NavLink page="Resume"/>
        </nav>
    );
};

export default Navbar;