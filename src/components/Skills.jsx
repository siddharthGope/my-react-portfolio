import React from "react";
import Card from "./cards/Card";
import htmlcss from '../assets/skills/html-css.png';
import reactIcon from '../assets/skills/react-icon.png';
import nodeJs from '../assets/skills/node.js.png';
import mongodb from '../assets/skills/mongodb.svg';
import redux from '../assets/skills/redux.png';
import vuexstore from '../assets/skills/vuex-store.png';
import vuejs from '../assets/skills/vue-js.png';
import restApi from '../assets/skills/rest-api.svg';
import github from '../assets/skills/github.png';
import githubCiCd from '../assets/skills/github-ci-cd.png';
import webDesign from '../assets/skills/web-design.png';
import JavaScript from '../assets/skills/JavaScript.png';
import Tailwind_CSS from '../assets/skills/Tailwind_CSS.png';

function Skills() {
    const skills = [
        { title: "HTML+CSS", image: htmlcss, height: 50, width: 50 },
        {
            title: "JavaScript",
            image: JavaScript,
            height: 50,
            width: 50,
        },
        { title: "ReactJs", image: reactIcon, height: 50, width: 50 },
        { title: "Redux", image: redux, height: 50, width: 50 },
        { title: "Vue", image: vuejs, height: 50, width: 50 },
        { title: "Vuex", image: vuexstore, height: 50, width: 50 },
        {
            title: "Tailwind CSS",
            image: Tailwind_CSS,
            height: 50,
            width: 50,
        },
        { title: "NodeJs", image: nodeJs, height: 50, width: 50 },
        { title: "MongoDB", image: mongodb, height: 50, width: 50 },
        { title: "Rest API", image: restApi, height: 50, width: 50 },
        { title: "GitHub", image: github, height: 50, width: 50 },
        // { title: "Typescript", image: "skills/typescript-icon.png", height:30, width:30},
        { title: "CI/CD", image: githubCiCd, height: 50, width: 50 },
        { title: "UI/UX", image: webDesign, height: 50, width: 50 },
    ];
    return (
        <section id="skills" className="bg-gradient-to-br from-[var(--third-color)] via-[var(--fourth-color)] to-[var(--tenth-color)]">
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
