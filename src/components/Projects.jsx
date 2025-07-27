import ProjectCard from './cards/Card'


function Projects() {

    const projects = [
        { title: 'Job Tracker', description: 'Job Tracker (MERN Stack App): Developed a full-stack job application tracker using React, Redux Toolkit, Node.js, Express, and MongoDB Atlas. Features include JWT auth, protected routes, CRUD operations, analytics dashboards with Chart.js, and responsive UI with Tailwind CSS.', image: 'job-tracker1.png', link: 'https://mern-job-tracker-app-786g.vercel.app/' },
        { title: 'Portfolio Site', description: 'Job Tracker (MERN Stack App): Developed a full-stack job application tracker using React, Redux Toolkit, Node.js, Express, and MongoDB Atlas. Features include JWT auth, protected routes, CRUD operations, analytics dashboards with Chart.js, and responsive UI with Tailwind CSS.', image: 'portfolio-img.png', link: 'https://mern-job-tracker-app-786g.vercel.app/' },
    ]

    return (
        <>
            <section id="projects" className="py-16 px-4 bg-gradient-to-br from-[var(--fifth-color)] via-[var(--third-color)] to-[var(--fourth-color)] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl text-[var(--thirteen-color)] font-bold mb-4 text-center">Projects</h2>
                    <p className='text-xl text-[var(--seventh-color)] font-bold mb-10 text-center'>Showcasing my latest work and creative solutions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} {...project} projectCard="projectCard" />
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects