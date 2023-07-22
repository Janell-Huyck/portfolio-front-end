import React from "react";
import Button from "../button/button.component";
import './projectCard.styles.scss';

const ProjectCard = ({ project }) => {
    const { title, description, liveLink, gitHubLink, imageURL, imageAlt } = project;
    return (
        <div className="project-card card text-center h-100 d-flex flex-column">
            <div className="project-title">{title}</div>
            <img className="card-img-top " src={imageURL} alt={imageAlt} />
            <div className="card-footer d-flex">
                    <p className="project-description">{description}</p>
                    <div className="see-links">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer"><Button className="project-button">Live</Button></a>
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer"><Button className="project-button">Code</Button></a>
                    </div>
            </div>
        </div>
    );
};

export default ProjectCard;