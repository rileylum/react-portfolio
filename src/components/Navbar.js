import React from "react";
import NavItem from "./NavItem";

function Navbar({pages, currPage, updateCurrPage}) {
    return (
        <nav>
            {pages.map(page => {
                return <NavItem key={page.id} page={page} currPage={currPage}  updateCurrPage={updateCurrPage}/>
            })}
        </nav>
    );
};

export default Navbar;