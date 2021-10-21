import React from "react";

import Navbar from "./Navbar";

function Header({pages, currPage}) {
    return (
    <header>
        <h1>Riley Lum</h1>
        <Navbar pages={pages} currPage={currPage}/>
    </header>
    )
}

export default Header;