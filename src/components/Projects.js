import React from "react";

import Project from "./Project";

function Projects() {

    const projects = [
        {name: "Node BBS", img: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        desc: "Full-stack web application in the style of old PHP based bulletin board systems", tech: "Built using Node, Express, Handlebars and MySQL",
        live_link: "https://nodebbs-demo.herokuapp.com/", git_link: "https://github.com/rileylum/nobeBBS"}
    ]

    return (
        <section className="mb-3 p-3" id="projects">
            <h2 className="text-center display-3 mb-3">Projects</h2>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="d-flex flex-wrap justify-content-around">
                        {projects.map((project => {
                            return <Project {...project} />
                        }))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects;

