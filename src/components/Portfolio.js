import React, {useState} from "react";
import Header from "./Header"

function Portfolio() {
    const pages = [{id: 0, title: "About Me"}, {id: 1, title: "Portfolio"}, {id: 2, title: "Contact"}, {id: 3, title: "Resume"}];
    const [currPage, setCurrPage] = useState(pages[0].id);

    const updateCurrPage = (id) => {
        setCurrPage(id);
    }

    return (
        <Header pages={pages} currPage={currPage} updateCurrPage={updateCurrPage}/>
    )
}

export default Portfolio;