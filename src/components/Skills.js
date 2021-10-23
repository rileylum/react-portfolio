import React from "react";

function Skills({skills = [{"icon": "html5", "name": "HTML"}, {"icon": "css3-alt", "name": "CSS"},{"icon":"js-square", "name": "JavaScript"}]}) {

    return (
        <ul className="d-flex flex-wrap container list-inline align-items-center text-center mt-5 w-50 fs-4">
            <h2 className="col-12 mb-3 display-6">My Skills</h2>
            {skills.map((skill => {
                return (
                <li className="col-12 col-lg-6">
                    <i className={`fab fa-${skill.icon} text-secondary`}> {skill.name}</i>
                </li>
                    )
            }))}
        </ul>
    )

}

export default Skills;