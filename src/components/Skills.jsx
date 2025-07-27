import React from "react";
import Card from "./cards/Card";

function Skills() {
    const skills = [
        { title: "HTML+CSS", image: "skills/html-css.png", height: '50px', width: '50px' },
        { title: "JavaScript", image: "skills/JavaScript.png", height: '50px', width: '50px' },
        { title: "ReactJs", image: "skills/react-icon.png", height: '50px', width: '50px' },
        { title: "Redux", image: "skills/redux.png", height: '50px', width: '50px' },
        { title: "Vue", image: "skills/vue-js.png", height: '50px', width: '50px' },
        { title: "Vuex", image: "skills/vuex-store.png", height: '50px', width: '50px' },
        { title: "Tailwind CSS", image: "skills/Tailwind_CSS.png", height: '50px', width: '50px' },
        { title: "NodeJs", image: "skills/node.js.png", height: '50px', width: '50px' },
        { title: "MongoDB", image: "skills/mongodb.svg", height: '50px', width: '50px' },
        { title: "Rest API", image: "skills/rest-api.svg", height: '50px', width: '50px' },
        { title: "GitHub", image: "skills/github.png", height: '50px', width: '50px' },
        // { title: "Typescript", image: "skills/typescript-icon.png", height:'50px', width:'50px'},
        { title: "CI/CD", image: "skills/github-ci-cd.png", height: '50px', width: '50px' },
        { title: "UI/UX", image: "skills/web-design.png", height: '50px', width: '50px' },
    ];
    return (
        <section className="bg-gradient-to-br from-[var(--third-color)] via-[var(--fourth-color)] to-[var(--tenth-color)]">
            <h2 className="text-4xl font-bold mb-4 text-[var(--thirteen-color)] text-center">Skills</h2>



            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 md:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <Card {...skill} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
