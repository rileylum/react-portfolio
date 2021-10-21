import React from "react";

import Navbar from "./Navbar";

function Header({pages, currPage, updateCurrPage}) {
    return (
    <header>
        <h1>Riley Lum</h1>
        <Navbar pages={pages} currPage={currPage} updateCurrPage={updateCurrPage}/>
    </header>
    )
}

export default Header;