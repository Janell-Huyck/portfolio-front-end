import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const MobileHomePage = () => {
  return (
    <div className="home-page-container page">
      <h1>Hi, I'm Janell!</h1>
      <div>
            <p className="fst-italic">based in Cincinnati, OH</p>
      </div>
      <div className='home-page-content'>
        <div className="home-page-upper-content">
          <div>
            <h2>Software Engineer</h2>
            <ul>
              <li>Ruby</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
              This is the mobile page
            </ul>
          </div>
          <img className="headshot" src={require("../../assets/images/ai-headshot2.jpeg")} alt="Janell" />
        </div>
        <div className="home-page-lower-content">
          <p>
          I like to think of myself as a Full Stack of awesomeness. With my background in Full Stack Web Development, 
          I have the technical skills and know-how to build, test, and deploy software applications and features. 
          But I also have a collaborative and supportive personality - I enjoy working with others, mentoring new team members, 
          and bouncing ideas off each other. And as someone who's used to adapting to new situations - like switching from 
          massage therapy to programming - I'm always ready to learn new things. For example, I used Chat GPT to help me 
          craft this perfect "about" section!
          </p>
        </div>
        <div className="home-page-link-icons">
          <a href="https://www.linkedin.com/in/janell-huyck/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
          <a href="https://github.com/Janell-Huyck/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHomePage;