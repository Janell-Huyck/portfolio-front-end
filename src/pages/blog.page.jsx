import React from 'react';
import './blog.page.css'; // Import the CSS file for the page

const BlogPage = () => {
  return (
    <div>
      <div className="blog-container">
        <iframe 
          title="My Blog"
          src="https://www.uncutruby.com"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="yes"
        />
      </div>
      </div>
    );
};

export default BlogPage;
