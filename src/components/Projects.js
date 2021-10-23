import React from "react";

function Projects() {

    return (
        <section className="mb-3 p-3" id="projects">
            <h2 className="text-center display-3 mb-3">Projects</h2>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="card col-12 col-lg-5 mb-3 bg-dark">
                            <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            className="card-img-top" alt="Someone using a laptop. Used thematically to describe the project." />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title mb-2 text-center">Node BBS</h5>
                                    <p className="card-text">Full-stack web application in the style of old PHP based bulletin board systems</p>
                                    <p className="card-text">Built using Node, Express, Handlebars and MySQL</p>
                                    <div>
                                        <a href="https://nodebbs-demo.herokuapp.com/" target="_blank" className="btn btn-success">Live Website</a>
                                        <a href="https://github.com/rileylum/nobeBBS" target="_blank" className="btn btn-primary">Github</a>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects;

