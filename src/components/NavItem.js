import React from "react";

function NavItem({page, currPage}) {
    
    const isCurrent = page.id === currPage;

    return (
        <a href="#" className={isCurrent ? "current-page" : ""}>{page.title}</a>
    );
};

export default NavItem;