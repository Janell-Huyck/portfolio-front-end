import React from "react";

const Projects = () => {
    return (
        <div className="page">
        <h1>Projects</h1>
        <h2 className="bg-warning fst-italic">Warning: these projects are still in the beginning stages 
        and not yet ready to be evaluated.  I have them listed here so that I have something 
        to work with as I develop my portfolio site.</h2>
        <p>Project links: </p>
        <a href="https://blog-generator-6qjr9.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">Blog-Generator</a>
        <br></br>
        <p>A Python project specifically for assiting in generating ChatGPT-generated blog posts.</p>
        <br></br>
        <a href="https://janell-huyck-clothing-ecommerce-demo.netlify.app/" target="_blank" rel="noopener noreferrer">Clothing-Ecommerce-Demo</a>
        <p>A React project demonstrating a sample ecommerce application.</p>
        <br></br>
        <a href="https://www.uncutruby.com" target="_blank" rel="noopener noreferrer">Uncut Ruby (the blog you can reach from the link in the side-menu)</a>
        <p>A blog I created using React.  NOTE - there is a placeholder blog from Netlify in there as of May 6.</p>
        </div>
    );
}

export default Projects;