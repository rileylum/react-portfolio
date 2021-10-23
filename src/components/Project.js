import React from "react";

function Project(props) {
    // {name: "Node BBS", img: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    // desc: "Full-stack web application in the style of old PHP based bulletin board systems", tech: "Built using Node, Express, Handlebars and MySQL",
    // live_link: "https://nodebbs-demo.herokuapp.com/", git_link: "https://github.com/rileylum/nobeBBS"}
    return (
        <div className="card col-12 col-lg-5 mb-3 bg-dark">
            <img src={props.img}
                className="card-img-top" alt="Someone using a laptop. Used thematically to describe the project." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title mb-2 text-center">{props.name}</h3>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">{props.tech}</p>
                <div>
                    <a href={props.live_link} target="_blank" className="btn btn-success">Live Website</a>
                    <a href={props.git_link} target="_blank" className="btn btn-primary">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Project;