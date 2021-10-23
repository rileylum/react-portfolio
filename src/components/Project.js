import React from "react";

function Project(props) {

    return (
        <div className="card col-12 col-lg-5 mb-3 bg-dark">
            <img src={props.img}
                className="card-img-top h-50" style={{objectFit:"cover"}}alt={props.alt} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title mb-2 text-center">{props.name}</h3>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">{props.tech}</p>
                <div>
                    <a href={props.live_link} target="_blank" className="btn btn-success mx-1">Live Website</a>
                    <a href={props.git_link} target="_blank" className="btn btn-primary mx-1">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Project;