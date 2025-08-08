import React from 'react'
import MyJourney from '../assets/my journey.svg';

function About() {
    return (
        <section id='about' className="bg-gradient-to-br from-[var(--tenth-color)] via-[var(--fourth-color)] to-[var(--fifth-color)] flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-8 text-[var(--thirteen-color)] text-center">
                My Journey
            </h2>
            <p className='text-xl text-[var(--seventh-color)]  mb-10 text-center'>
                With 3.5 years of experience in web development, I've had the privilege of working with different companies on diverse projects that have shaped my understanding of both technical excellence and user experience.

                I believe in continuous learning and staying updated with the latest technologies. My goal is to create solutions that not only meet requirements but exceed expectations.

                Every project is an opportunity to push boundaries and create something meaningful. I'm passionate about turning complex problems into simple, elegant solutions that users love.

                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
            </p>
            <img src={MyJourney} alt="my 5 years journey" className='rounded-xl mt-5' />
        </section>
    )
}

export default About