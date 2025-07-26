import React from "react";
import Card from "./cards/Card";

function Skills() {
    const skills = [
        { title: "HTML+CSS", image: "" },
        { title: "JavaScript", image: "" },
        { title: "ReactJs", image: "" },
        { title: "ReduxJs", image: "" },
        { title: "Vue", image: "" },
        { title: "Vuex", image: "" },
        { title: "Tailwind CSS", image: "" },
        { title: "NodeJs", image: "" },
        { title: "MongoDB", image: "" },
        { title: "Git", image: "" },
        { title: "Typescript", image: "" },
        { title: "CI/CD", image: "" },
    ];
    return (
        <section className="bg-gradient-to-br from-[var(--third-color)] via-[var(--fourth-color)] to-[var(--tenth-color)]">
            <h2 className="text-4xl font-bold mb-4 text-[var(--thirteen-color)] text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <Card {...skill} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
