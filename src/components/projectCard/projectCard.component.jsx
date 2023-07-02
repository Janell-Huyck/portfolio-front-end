import React from "react";
import Button from "../button/button.component";
import './projectCard.styles.scss';

const ProjectCard = ({ project }) => {
    const { title, description, liveLink, gitHubLink, image, imageAlt } = project;
    return (
        <div className="project-card card text-center h-100">
            <img className="card-img-top" src={image} alt={imageAlt} />
            <div className="card-footer h-100 align-items-end">
                <h2>{title}</h2>
                <p className="flex-grow-1 flex-shrink-1">{description}</p>
                <div className="see-links ">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer"><Button>See Live</Button></a>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer"><Button>See Code</Button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;