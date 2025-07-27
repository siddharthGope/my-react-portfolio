import React from "react";
import Card from "./cards/Card";

function Skills() {
    const skills = [
        { title: "HTML+CSS", image: "skills/html-css.png", height: 50, width: 50 },
        {
            title: "JavaScript",
            image: "skills/JavaScript.png",
            height: 50,
            width: 50,
        },
        { title: "ReactJs", image: "skills/react-icon.png", height: 50, width: 50 },
        { title: "Redux", image: "skills/redux.png", height: 50, width: 50 },
        { title: "Vue", image: "skills/vue-js.png", height: 50, width: 50 },
        { title: "Vuex", image: "skills/vuex-store.png", height: 50, width: 50 },
        {
            title: "Tailwind CSS",
            image: "skills/Tailwind_CSS.png",
            height: 50,
            width: 50,
        },
        { title: "NodeJs", image: "skills/node.js.png", height: 50, width: 50 },
        { title: "MongoDB", image: "skills/mongodb.svg", height: 50, width: 50 },
        { title: "Rest API", image: "skills/rest-api.svg", height: 50, width: 50 },
        { title: "GitHub", image: "skills/github.png", height: 50, width: 50 },
        // { title: "Typescript", image: "skills/typescript-icon.png", height:30, width:30},
        { title: "CI/CD", image: "skills/github-ci-cd.png", height: 50, width: 50 },
        { title: "UI/UX", image: "skills/web-design.png", height: 50, width: 50 },
    ];
    return (
        <section className="bg-gradient-to-br from-[var(--third-color)] via-[var(--fourth-color)] to-[var(--tenth-color)]">
            <h2 className="text-5xl font-bold mb-8 text-[var(--thirteen-color)] text-center">
                Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                    <Card key={index} {...skill} skillsCard="skillsCard" />
                ))}
            </div>
        </section>
    );
}

export default Skills;
