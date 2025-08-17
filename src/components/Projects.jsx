import ProjectCard from "./cards/Card";
import jobTracker from "../assets/job-tracker.png";
import portfolioImg from "../assets/portfolio-img.png";
import weatherApp from "../assets/weatherApp.png";
import beezlabs from "../assets/beezlabs.png";

function Projects() {
    const projects = [
        {
            title: "Job Tracker",
            description:
                "Job Tracker (MERN Stack App): Developed a full-stack job application tracker using React, Redux Toolkit, Node.js, Express, and MongoDB Atlas. Features include JWT auth, protected routes, CRUD operations, analytics dashboards with Chart.js, and responsive UI with Tailwind CSS.",
            image: jobTracker,
            link: "https://mern-job-tracker-app-786g.vercel.app/",
        },
        {
            title: "Portfolio Site",
            description:
                "Developed a modern personal portfolio website using React.js, showcasing  about me, my skills,my journey, projects highlight, and contact information. Implemented a responsive design with Tailwind and customCSS, integrated PDF download functionality, and utilized reusable components for scalability.",
            image: portfolioImg,
            link: "https://my-react-portfolio-eosin-theta.vercel.app/",
        },
        {
            title: "BeezLabs Website",
            description:
                "Developed BeezLabs’ official website using Nuxt JS, Vuetify, Vuex, MailchimpAPI, Vuex, Nuxt-Content, SEO and JavaScript. Implemented dynamic optimized, reuseable UI components, smooth animations, responsiveness and cross-browser compatibility to highlight the company’s services and innovation.",
            image: beezlabs,
            link: "https://www.beezlabs.com/",
        },
        {
            title: "HowIsOutside?",
            description:
                "Developed a responsive Weather App using React JS and Tailwind CSS that fetches real-time weather data from OpenWeatherMap API. Includes features like city-based search, temperature, humidity, and weather icons with clean UI and smooth UX.",
            image: weatherApp,
            link: "https://react-weather-app-three-inky.vercel.app/",
        },
    ];

    return (
        <>
            <section
                id="projects"
                className="py-16 px-4 bg-gradient-to-br from-[var(--fifth-color)] via-[var(--third-color)] to-[var(--fourth-color)] text-white"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl text-[var(--thirteen-color)] font-bold mb-4 text-center">
                        Projects
                    </h2>
                    <p className="text-xl text-[var(--seventh-color)] font-bold mb-10 text-center">
                        Showcasing my latest work and creative solutions
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} projectCard="projectCard" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
