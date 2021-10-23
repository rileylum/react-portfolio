import React from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";

function Content(props) {
    
    return (
        <main className="container">
            {props.currPage === 0 && <AboutMe />}
            {props.currPage === 1 && <Projects />}
            {props.currPage === 2 && (<p>Contact</p>)}
            {props.currPage === 3 && <Resume />}
        </main>
    )

}

export default Content;