import React from "react";

import Project from "./Project";

function Projects() {

    const projects = [
        {name: "Budget Tracker", img: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
        alt: "A calculator. Used to thematically describe the project.", desc: "A full stack progressive web application to track your budget, allows you to make additions and subtractions and displays information in a graph!", tech: "Built using Node.js, Express, MongoDB, Mongoose and using a Service Worker to make a PWA!",
        live_link: "https://riley-budget-tracker.herokuapp.com/", git_link: "https://github.com/rileylum/PWA-BudgetTracker"},
        {name: "Workout Tracker", img: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        alt:"A row of dumbells. Used to thematically describe the project.", desc: "A full stack web application to track your workouts, and your progress over time.", tech: "Built using Node.js, Express, MongoDB, Mongoose and hosted on Heroku!",
        live_link:"https://riley-workout-tracker.herokuapp.com/", git_link: "https://github.com/rileylum/workout-tracker"},
        {name: "Node BBS", img: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt:"Someone using a laptop. Used thematically to describe the project", desc: "Full-stack web application in the style of old PHP based bulletin board systems", tech: "Built using Node, Express, Handlebars and MySQL",
        live_link: "https://nodebbs-demo.herokuapp.com/", git_link: "https://github.com/rileylum/nobeBBS"},
        {name: "Tech Blog", img: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt:"Someone using a laptop. Used thematically to describe the project.", desc: "Full-stack web application that allows users to sign-up and start their own blog", tech: "Built using Node, Express, Handlebars and MySQL",
        live_link: "https://riley-tech-blog.herokuapp.com/", git_link: "https://github.com/rileylum/tech-blog"},
        {name: "Weather Dashboard", img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt:"A sunrise over mountains. Used thematically to describe the project.", desc: "Weather app that provides current and future weather forecasts in cities", tech: "Built using Bootstrap, and the OpenWeatherAPI",
        live_link: "https://rileylum.github.io/weather-dashboard/", git_link: "https://github.com/rileylum/weather-dashboard"},
        {name: "News Aggregator", img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        alt:"Someone reading a news paper. Used thematically to describe the project.", desc: "Web app which collates content from popular news sites like Reddit", tech: "Built using HTML, CSS, Bulma and Reddit + Guardian API's",
        live_link: "https://rileylum.github.io/News-Aggregator/", git_link: "https://github.com/rileylum/News-Aggregator"}
    ]

    return (
        <section className="mb-3 p-3">
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

