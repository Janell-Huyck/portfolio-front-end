import React from 'react';

import { HomePageContainer, 
          Headshot,
          AboutMeText,
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
      <AboutMeText>
      <p>
        Hi!  I'm Janell: software engineer, Ruby enthusiast, problem solver, and cat-lover.  
      </p>
      <p>
        My first experience writing code was back when I was about 10.  My parents had bought a PC, and I was supposed to share not only with my dad but my older sister.  No way!!!  So... my first program was a password-protection program designed specifically to lock my sister out of the computer when I wasn't using it.  It worked until my dad broke my infinite loop with control-alt-delete and I learned that I didn't know as much as I thought I did.
      </p>
      <p>
        I've grown up a bit since then, and now my favorite kind of program is one that makes life easier for someone else.  My all-time favorite program is a Flask app I wrote to simplify a work process for one of my co-workers when I worked at Spring.  It automated a complex manual process, and gave it a GUI, allowing him to just copy/past in what he was looking for.  My entire team used that program for the rest of my time there, and as far as I know it's still in use.
      </p>
      <p>
        Unfortunately, I can't show you that project; it's private.  Nor can I show you any of the other work I did for my employers.  I can tell you I've been mostly using Ruby on Rails, and that I learned Ruby on the job.  
      </p>
      <p>
        I had a handful of projects for a portfolio when I graduated from Kenzie Academy's year-long Full Stack Web Development program.  When I took another look at them last year, I realized that NONE of them were good enough - they were clumsy, rudimentary, and made like you might expect from a fresh junior engineer.  That's one of the drawbacks of taking a look at your code after you've been working a while; everything you did before is no longer good enough.
      </p>
      <p>
        This portfolio is also one of my more recent projects.  I'm still working on it, but I'm happy with the progress I've made so far.  I hope you enjoy it!
      </p>
      <p>
        Here are the other projects in my portfolio:
      </p>
      <ul>
        <li>2048, a game in React that is a clone of the popular web-based 2048 game.</li>
        <li>Uncut Ruby, a blogging platform written in Ruby on Rails, to hold a blog about programming in Ruby on Rails.  It's still in progress, though I'm starting to add articles to it.</li>
        <li>More projects are still to come...</li>
      </ul>
      </AboutMeText>
    </HomePageContainer>
  );
}

export default HomePage;