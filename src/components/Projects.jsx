import ProjectCard from './cards/Card'


function Projects() {

    const projects = [
        { title: 'Job Tracker', description: 'Job Tracker (MERN Stack App): Developed a full-stack job application tracker using React, Redux Toolkit, Node.js, Express, and MongoDB Atlas. Features include JWT auth, protected routes, CRUD operations, analytics dashboards with Chart.js, and responsive UI with Tailwind CSS.', image: 'job-tracker1.png', link: 'https://mern-job-tracker-app-786g.vercel.app/' }
    ]

    return (
        <>
            <section id="projects" className="py-16 px-4 bg-gradient-to-br from-[var(--fifth-color)] via-[var(--sixth-color)] to-[var(--fourth-color)] text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects