import React from 'react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLinkContainer } from './footer.styles.jsx';

const Footer = () => {
    return (
        <FooterLinkContainer as="footer">
            <a href="https://www.linkedin.com/in/janell-huyck/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="black"/>
            </a>
            <a href="https://github.com/Janell-Huyck/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="xl" color="black"/>
            </a>
        </FooterLinkContainer>
    );
}

export default Footer;