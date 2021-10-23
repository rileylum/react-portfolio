import React from "react";

function NavItem({page, currPage, updateCurrPage}) {
    
    const isCurrent = page.id === currPage;

    const handleClick = () => {
        updateCurrPage(page.id);
    }

    return (
        <li className="nav-item">
            <span className={isCurrent ? "current-page nav-link" : "nav-link"} onClick={handleClick}>{page.title}</span>
        </li>
    );
};

export default NavItem;