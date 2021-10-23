import React from "react";
import NavItem from "./NavItem";

function Navbar({pages, currPage, updateCurrPage}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-inline">
            <div className="container-fluid">
                <div className="d-lg-flex flex-row align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {pages.map(page => {
                                return <NavItem key={page.id} page={page} currPage={currPage}  updateCurrPage={updateCurrPage}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;