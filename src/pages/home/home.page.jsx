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
      <br/>
      <br/>
      <p>
        As a software engineer with over two and a half years of professional experience, I bring a strong technical foundation in languages such as Ruby, Ruby on Rails, Python, JavaScript, and React. I am an adaptable learner, and my ability to quickly grasp and apply new technologies has propelled me through a career marked by efficient problem-solving and user-centric design.
      </p>
      <p>
        During my time at Spring and Robert Half, I have proven my ability to streamline processes and create innovative solutions, which have drastically reduced runtime and improved end-user experience. These experiences showcase my technical capabilities and my ability to bring meaningful impact to a team.
      </p>
      <p>
        In addition to my technical skills, I am an effective collaborator and mentor. Whether working with junior staff members at Robert Half or guiding budding developers at Kenzie Academy, I have consistently fostered a cooperative and productive atmosphere.
      </p>
      <p>
        I am constantly learning and eager to take on the ever-evolving challenges in the software development landscape. My career reflects my capacity to master complex codebases, devise innovative solutions, and work collaboratively to produce the best possible results.
      </p>
    </HomePageContainer>
  );
}

export default HomePage;