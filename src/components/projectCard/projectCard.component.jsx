import React from "react";
// import Button from "../button/button.component";
import { Card, CardImage, CardTitle, CardText, CardButton, CardButtonContainer } from './projectCard.styles.jsx';

const ProjectCard = ({ project }) => {
    const { title, description, liveLink, gitHubLink, imageURL, imageAlt } = project;
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardImage as="img" style={{backgroundImage: `url(${imageURL})`}} alt={imageAlt} />
            {/* <img className="card-img-top " src={imageURL} alt={imageAlt} /> */}
            <CardText>{description}</CardText>
            <CardButtonContainer>
                <CardButton as="a" href={liveLink} target="_blank" rel="noopener noreferrer">Live</CardButton>
                <CardButton as="a" href={gitHubLink} target="_blank" rel="noopener noreferrer">Code</CardButton>
            </CardButtonContainer>
            
        </Card>
    );
};

export default ProjectCard;