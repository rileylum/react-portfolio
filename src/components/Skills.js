import React from "react";

function Skills({skills = [
                        {"icon": "fab fa-html5", "name": "HTML"}, 
                        {"icon": "fab fa-css3-alt", "name": "CSS"},
                        {"icon":"fab fa-js-square", "name": "JavaScript"},
                        {"icon":"fab fa-react", "name":"React"},
                        {"icon":"fab fa-node-js", "name": "NodeJS"},
                        {"icon":"fas fa-server", "name":"Express"},
                        {"icon":"fas fa-database", "name": "MySQL"},
                        {"icon": "far fa-file-alt", "name": "MongoDB"},
                        {"icon":"fas fa-globe", "name": "GIS"}
                    ]}) {

    return (
        <ul className="d-flex flex-wrap container list-inline align-items-center text-center mt-5 w-50 fs-4">
            <h2 className="col-12 mb-3 display-6">My Skills</h2>
            {skills.map((skill => {
                return (
                <li className="col-12 col-lg-6">
                    <i className={`${skill.icon} text-secondary`}></i> {skill.name}
                </li>
                    )
            }))}
        </ul>
    )

}

export default Skills;