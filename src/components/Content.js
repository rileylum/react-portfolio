import React from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";

function Content(props) {
    
    return (
        <main className="container">
            {props.currPage === 0 && <AboutMe />}
            {props.currPage === 1 && <Projects />}
            {props.currPage === 2 && (<p>Contact</p>)}
            {props.currPage === 3 && (<p>Resume</p>)}
        </main>
    )

}

export default Content;