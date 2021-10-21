import React from "react";
import NavItem from "./NavItem";

function Navbar({pages, currPage}) {
    return (
        <nav>
            {pages.map(page => {
                return <NavItem key={page.id} page={page} currPage={currPage}/>
            })}
        </nav>
    );
};

export default Navbar;