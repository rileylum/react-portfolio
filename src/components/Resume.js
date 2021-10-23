import React from "react";
import Skills from "./Skills";

function Resume() {
    return (
        <section className="mb-3 p-3 text-center">
            <h2 className="display-3 mb-3">Resume</h2>
            <p>View My Resume - <a href="/Resume.pdf" target="_blank" className="btn btn-secondary"><i className="fas fa-file-download"></i></a></p>
            <Skills />
        </section>
    )
}

export default Resume;