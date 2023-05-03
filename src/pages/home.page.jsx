import React from 'react';

function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
      <section id="resume">
        <h2>Resume</h2>
        <p>Here's a link to my resume: <a href="https://example.com/resume.pdf">Download</a></p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Here's a link to my personal projects page: <a href="https://example.com/projects">View</a></p>
      </section>
      <section id="blog">
        <h2>Blog</h2>
        <p>Here's a link to my blog: <a href="https://example.com/blog">Read</a></p>
      </section>
    </div>
  );
}

export default Home;
