import React from 'react';

import { HomePageContainer, 
          Headshot,
          NameTitleLocation
        } from './home.styles.jsx';

const HomePage = () => {
  return (
    <HomePageContainer>
      <NameTitleLocation>
        <h1>Hi, I'm Janell!</h1>
        <h2>Software Engineer</h2>
        <p className="fst-italic">based in Cincinnati, OH</p>
      </NameTitleLocation>
      
        <ul>
          <li>Ruby</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

          <Headshot className="headshot" src={require("../../assets/images/ai-headshot2.jpeg")} alt="Janell" />


          <p>
          I like to think of myself as a Full Stack of awesomeness. With my background in Full Stack Web Development, 
          I have the technical skills and know-how to build, test, and deploy software applications and features. 
          But I also have a collaborative and supportive personality - I enjoy working with others, mentoring new team members, 
          and bouncing ideas off each other. And as someone who's used to adapting to new situations - like switching from 
          massage therapy to programming - I'm always ready to learn new things. For example, I used Chat GPT to help me 
          craft this perfect "about" section!
          </p>

    </HomePageContainer>
  );
}

export default HomePage;