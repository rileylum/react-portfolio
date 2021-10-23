import React from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function Content(props) {
    
    return (
        <main className="container">
            {props.currPage === 0 && <AboutMe />}
            {props.currPage === 1 && <Projects />}
            {props.currPage === 2 && <Contact/>}
            {props.currPage === 3 && <Resume />}
        </main>
    )

}

export default Content;