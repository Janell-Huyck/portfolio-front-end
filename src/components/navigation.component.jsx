import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <h1>Navigation</h1>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </Fragment>
  );
};

export default Navigation;
