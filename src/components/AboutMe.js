import React from "react";
import Skills from "./Skills";

function AboutMe() {
    return (
        <section className="mb-3 p-3"> 
            <h2 className="text-center display-3 mb-3">About Me</h2>
            <div className="d-flex flex-wrap justify-content-around align-items-center">
            <img className="rounded-circle mb-3 col-12 col-lg-4" style={{width: "100%", maxWidth: "300px"}}src="https://avatars.githubusercontent.com/u/26016895?v=4" alt="Me!"/>
            <p className="col-12 mb-3 col-lg-6">I am a Software Developer leveraging a career in GIS and Defence Intelligence to provide unique
                perspectives to how end users interact with websites and software platforms. Earned a certificate
                in Full Stack Web Development from the University of Adelaide Coding Boot Camp. Innovative
                problem-solver who is passionate about developing apps to solve complex intelligence questions.
                Strengths in communicating effectively, strategic planning, project management and working in
                teams.</p>
                </div>
            <Skills/>
        </section>
    )
}

export default AboutMe;