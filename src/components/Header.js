import React from "react";

import Navbar from "./Navbar";

function Header({pages, currPage, updateCurrPage}) {
    return (
    <header className="container-fluid d-flex justify-content-between">
        <h1 className="d-inline-block">Riley Lum</h1>
        <Navbar pages={pages} currPage={currPage} updateCurrPage={updateCurrPage}/>
    </header>
    )
}

export default Header;