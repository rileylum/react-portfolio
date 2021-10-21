import React from "react";

function NavItem({page, currPage, updateCurrPage}) {
    
    const isCurrent = page.id === currPage;

    const handleClick = () => {
        updateCurrPage(page.id);
    }

    return (
        <a href="#" className={isCurrent ? "current-page" : ""} onClick={handleClick}>{page.title}</a>
    );
};

export default NavItem;