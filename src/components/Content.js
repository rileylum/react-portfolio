import React from "react";

import AboutMe from "./AboutMe";

function Content(props) {
    
    return (
        <main className="container">
            {props.currPage === 0 && <AboutMe />}
            {props.currPage === 1 && (<p>Portfolio</p>)}
            {props.currPage === 2 && (<p>Contact</p>)}
            {props.currPage === 3 && (<p>Resume</p>)}
        </main>
    )

}

export default Content;