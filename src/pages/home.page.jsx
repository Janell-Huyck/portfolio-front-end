import React from 'react';
import './home.page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div className="home-page-container">
      <h1>Hi, I'm Janell!</h1>
      <div className='home-page-content'>
        <div className="home-page-upper-content">
          <div>
            <h2>Software Engineer</h2>
            <ul>
              <li>Ruby</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Based in Cincinnati, OH</h3>
          </div>
          <a href="https://www.linkedin.com/in/janell-huyck/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>

          <img className="headshot" src={require("../assets/images/ai-headshot2.jpeg")} alt="Janell" />
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
      </div>
    </div>
  );
}

export default Home;
