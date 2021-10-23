import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";

function Portfolio() {
    const pages = [{id: 0, title: "About Me"}, {id: 1, title: "Portfolio"}, {id: 2, title: "Contact"}, {id: 3, title: "Resume"}];
    const [currPage, setCurrPage] = useState(pages[0].id);

    const updateCurrPage = (id) => {
        setCurrPage(id);
    }

    return (
        <div>
            <Header pages={pages} currPage={currPage} updateCurrPage={updateCurrPage}/>
            <Content currPage={currPage}/>
        </div>
    )
}

export default Portfolio;