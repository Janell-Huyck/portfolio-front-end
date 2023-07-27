import React from "react";
import ProjectCard from "../../components/projectCard/projectCard.component";
import { ProjectsPageContainer, CardContainer, CenteredContent } from './projects.styles.jsx'

const Projects = () => {

    const projects = [
        // {
        //     title: "Clothing-Ecommerce-Demo",
        //     description: "A React project demonstrating a sample ecommerce application.",
        //     liveLink: "https://janell-huyck-clothing-ecommerce-demo.netlify.app/",
        //     imageURL: "/images/projects/clothing-ecommerce.png",
        //     imageAlt: "Clothing Ecommerce Demo",
        //     gitHubLink: "https://github.com/Janell-Huyck/clothing-ecommerce"
        // },
        {
            title: "2048-Game",
            description: "A React project demonstrating a clone of the game 2048.",
            liveLink: "https://janell-huyck.github.io/2048-game/",
            imageURL: "/images/projects/2048.png",
            imageAlt: "2048 game",
            gitHubLink: "https://github.com/Janell-Huyck/2048-game"
        },
        {
            title: "Blog",
            description: "A Ruby on Rails project demonstrating a blog application.",
            liveLink: "https://uncutruby.com",
            imageURL: "/images/projects/under-construction.png",
            imageAlt: "Under Construction",
            gitHubLink: "https://github.com/Janell-Huyck/uncut-ruby"
        },
    ]


    return (
        <ProjectsPageContainer>
            <CenteredContent>
                <h1>Projects</h1>
                <CardContainer>
                    {projects.map((project, index) => (         
                        <ProjectCard key={index} project={project} />
                    ))}   
                </CardContainer>
            </CenteredContent>
        </ProjectsPageContainer>
    );
}

export default Projects;