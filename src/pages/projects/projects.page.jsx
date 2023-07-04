import React from "react";
import ProjectCard from "../../components/projectCard/projectCard.component";
import './projects.styles.scss'

const Projects = () => {

    const projects = [
        // {
        //     title: "Blog-Generator",
        //     description: "A Python project specifically for assiting in generating ChatGPT-generated blog posts.",
        //     liveLink: "https://blog-generator-6qjr9.ondigitalocean.app/",
        //     imageURL: "/images/projects/blog-generator.png",
        //     imageAlt: "Blog Generator",
        //     gitHubLink: "https://github.com/Janell-Huyck/blog-generator"
        // },
        {
            title: "Clothing-Ecommerce-Demo",
            description: "A React project demonstrating a sample ecommerce application.",
            liveLink: "https://janell-huyck-clothing-ecommerce-demo.netlify.app/",
            imageURL: "/images/projects/clothing-ecommerce.png",
            imageAlt: "Clothing Ecommerce Demo",
            gitHubLink: "https://github.com/Janell-Huyck/clothing-ecommerce"
        },
        {
            title: "2048-Game",
            description: "A React project demonstrating a clone of the game 2048.",
            liveLink: "https://janell-huyck.github.io/2048-game/",
            imageURL: "/images/projects/2048.png",
            imageAlt: "2048 game",
            gitHubLink: "https://github.com/Janell-Huyck/2048-game"
        }
    ]


    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <p>Page still under construction - last updated Jul 4, 2023</p>
            <div className="projects-list container-fluid content-row">
                <div className="row">
                    <div className="d-flex flex-wrap">
                        {projects.map((project, index) => (
                            <div className="col-sm-6 col-lg-4 min-500" key={index}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Projects;