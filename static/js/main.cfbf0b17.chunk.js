(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{37:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(9),i=a.n(c),n=a(3),r=a(0);var l=function(e){var t=e.page,a=e.currPage,s=e.updateCurrPage,c=t.id===a;return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("span",{className:"nav-link text-end ".concat(c?"active":""),onClick:function(){s(t.id)},children:t.title})})};var o=function(e){var t=e.pages,a=e.currPage,s=e.updateCurrPage;return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark d-inline",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"d-lg-flex flex-row align-items-center",children:[Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:t.map((function(e){return Object(r.jsx)(l,{page:e,currPage:a,updateCurrPage:s},e.id)}))})})]})})})};var d=function(e){var t=e.pages,a=e.currPage,s=e.updateCurrPage;return Object(r.jsxs)("header",{className:"container-fluid d-flex justify-content-between",children:[Object(r.jsx)("h1",{className:"d-inline-block",children:"Riley Lum"}),Object(r.jsx)(o,{pages:t,currPage:a,updateCurrPage:s})]})};var m=function(){return Object(r.jsxs)("section",{className:"mb-3 p-3",children:[Object(r.jsx)("h2",{className:"text-center display-3 mb-3",children:"About Me"}),Object(r.jsxs)("div",{className:"d-flex flex-wrap justify-content-around align-items-center",children:[Object(r.jsx)("img",{className:"rounded-circle mb-3 col-12 col-lg-4",style:{width:"100%",maxWidth:"300px"},src:"https://avatars.githubusercontent.com/u/26016895?v=4",alt:"Me!"}),Object(r.jsx)("p",{className:"col-12 mb-3 col-lg-6",children:"I am a Software Developer leveraging a career in GIS and Defence Intelligence to provide unique perspectives to how end users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University of Adelaide Coding Boot Camp. Innovative problem-solver who is passionate about developing apps to solve complex intelligence questions. Strengths in communicating effectively, strategic planning, project management and working in teams."})]})]})},b=a(2);var u=function(e){return Object(r.jsxs)("div",{className:"card col-12 col-lg-5 mb-3 bg-dark",children:[Object(r.jsx)("img",{src:e.img,className:"card-img-top h-50",style:{objectFit:"cover"},alt:e.alt}),Object(r.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(r.jsx)("h3",{className:"card-title mb-2 text-center",children:e.name}),Object(r.jsx)("p",{className:"card-text",children:e.desc}),Object(r.jsx)("p",{className:"card-text",children:e.tech}),Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:e.live_link,target:"_blank",className:"btn btn-success mx-1",children:"Live Website"}),Object(r.jsx)("a",{href:e.git_link,target:"_blank",className:"btn btn-primary mx-1",children:"Github"})]})]})]})};var j=function(){return Object(r.jsxs)("section",{className:"mb-3 p-3",children:[Object(r.jsx)("h2",{className:"text-center display-3 mb-3",children:"Projects"}),Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("div",{className:"w-75",children:Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:[{name:"Budget Tracker",img:"https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",alt:"A calculator. Used to thematically describe the project.",desc:"A full stack progressive web application to track your budget, allows you to make additions and subtractions and displays information in a graph!",tech:"Built using Node.js, Express, MongoDB, Mongoose and using a Service Worker to make a PWA!",live_link:"https://riley-budget-tracker.herokuapp.com/",git_link:"https://github.com/rileylum/PWA-BudgetTracker"},{name:"Workout Tracker",img:"https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",alt:"A row of dumbells. Used to thematically describe the project.",desc:"A full stack web application to track your workouts, and your progress over time.",tech:"Built using Node.js, Express, MongoDB, Mongoose and hosted on Heroku!",live_link:"https://riley-workout-tracker.herokuapp.com/",git_link:"https://github.com/rileylum/workout-tracker"},{name:"Node BBS",img:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Someone using a laptop. Used thematically to describe the project",desc:"Full-stack web application in the style of old PHP based bulletin board systems",tech:"Built using Node, Express, Handlebars and MySQL",live_link:"https://nodebbs-demo.herokuapp.com/",git_link:"https://github.com/rileylum/nobeBBS"},{name:"Tech Blog",img:"https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Someone using a laptop. Used thematically to describe the project.",desc:"Full-stack web application that allows users to sign-up and start their own blog",tech:"Built using Node, Express, Handlebars and MySQL",live_link:"https://riley-tech-blog.herokuapp.com/",git_link:"https://github.com/rileylum/tech-blog"},{name:"Weather Dashboard",img:"https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:"A sunrise over mountains. Used thematically to describe the project.",desc:"Weather app that provides current and future weather forecasts in cities",tech:"Built using Bootstrap, and the OpenWeatherAPI",live_link:"https://rileylum.github.io/weather-dashboard/",git_link:"https://github.com/rileylum/weather-dashboard"},{name:"News Aggregator",img:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",alt:"Someone reading a news paper. Used thematically to describe the project.",desc:"Web app which collates content from popular news sites like Reddit",tech:"Built using HTML, CSS, Bulma and Reddit + Guardian API's",live_link:"https://rileylum.github.io/News-Aggregator/",git_link:"https://github.com/rileylum/News-Aggregator"}].map((function(e){return Object(r.jsx)(u,Object(b.a)({},e))}))})})})]})};var h=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)({name:"",email:"",message:""}),l=Object(n.a)(i,2),o=l[0],d=l[1],m=function(e){var t=a;t[e.target.id]=e.target.value,c(Object(b.a)({},t))},u=function(e){var t=e.target.id;console.log(t);var a=o;if(e.target.value||(a[e.target.id]="".concat(t," cannot be empty")),"email"===t){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.target.value).toLowerCase())||(a.email="email must be valid")}d(Object(b.a)({},a))},j=function(e){var t=o;t[e.target.id]="",d(Object(b.a)({},t))};return Object(r.jsxs)("section",{className:"mb-3 p-3",children:[Object(r.jsx)("h2",{className:"text-center display-3 mb-3",children:"Contact Me"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",value:a.name,onChange:m,onBlur:u,onFocus:j,className:"form-control",id:"name"})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),Object(r.jsx)("input",{type:"email",value:a.email,onChange:m,onBlur:u,onFocus:j,className:"form-control",id:"email"})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"message",className:"form-label",children:"Message"}),Object(r.jsx)("textarea",{value:a.message,onChange:m,onBlur:u,onFocus:j,className:"form-control",id:"message",rows:"3"})]}),o&&Object(r.jsx)("p",{className:"d-block",children:"".concat(o.name)}),o&&Object(r.jsx)("p",{className:"d-block",children:"".concat(o.email)}),o&&Object(r.jsx)("p",{className:"d-block",children:"".concat(o.message)}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Submit"})]})]})};var p=function(e){var t=e.skills,a=void 0===t?[{icon:"fab fa-html5",name:"HTML"},{icon:"fab fa-css3-alt",name:"CSS"},{icon:"fab fa-js-square",name:"JavaScript"},{icon:"fab fa-react",name:"React"},{icon:"fab fa-node-js",name:"NodeJS"},{icon:"fas fa-server",name:"Express"},{icon:"fas fa-database",name:"MySQL"},{icon:"far fa-file-alt",name:"MongoDB"},{icon:"fas fa-globe",name:"GIS"}]:t;return Object(r.jsxs)("ul",{className:"d-flex flex-wrap container list-inline align-items-center text-center mt-5 w-50 fs-4",children:[Object(r.jsx)("h2",{className:"col-12 mb-3 display-6",children:"My Skills"}),a.map((function(e){return Object(r.jsxs)("li",{className:"col-12 col-lg-6",children:[Object(r.jsx)("i",{className:"".concat(e.icon," text-secondary")})," ",e.name]})}))]})};var f=function(){return Object(r.jsxs)("section",{className:"mb-3 p-3 text-center",children:[Object(r.jsx)("h2",{className:"display-3 mb-3",children:"Resume"}),Object(r.jsxs)("p",{children:["View My Resume - ",Object(r.jsx)("a",{href:"/Resume.pdf",target:"_blank",className:"btn btn-secondary",children:Object(r.jsx)("i",{className:"fas fa-file-download"})})]}),Object(r.jsx)(p,{})]})};var x=function(e){return Object(r.jsxs)("main",{className:"container",children:[0===e.currPage&&Object(r.jsx)(m,{}),1===e.currPage&&Object(r.jsx)(j,{}),2===e.currPage&&Object(r.jsx)(h,{}),3===e.currPage&&Object(r.jsx)(f,{})]})};var g=function(){return Object(r.jsx)("footer",{className:"footer mt-auto py-3",children:Object(r.jsxs)("div",{className:"container text-center fs-1",children:[Object(r.jsx)("a",{className:"link link-dark px-3",href:"https://www.github.com/rileylum",target:"_blank",children:Object(r.jsx)("i",{className:"fab fa-github text-secondary"})}),Object(r.jsx)("a",{className:"link link-dark px-3",href:"https://www.linkedin.com/in/riley-lum/",target:"_blank",children:Object(r.jsx)("i",{className:"fab fa-linkedin text-secondary"})})]})})};var v=function(){var e=[{id:0,title:"About Me"},{id:1,title:"Portfolio"},{id:2,title:"Contact"},{id:3,title:"Resume"}],t=Object(s.useState)(e[0].id),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.jsxs)("div",{className:"d-flex flex-column",style:{minHeight:"100%"},children:[Object(r.jsx)(d,{pages:e,currPage:c,updateCurrPage:function(e){i(e)}}),Object(r.jsx)(x,{currPage:c}),Object(r.jsx)(g,{})]})};var O=function(){return Object(r.jsx)("div",{className:"h-100",children:Object(r.jsx)(v,{})})};a(15),a(16);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.cfbf0b17.chunk.js.map