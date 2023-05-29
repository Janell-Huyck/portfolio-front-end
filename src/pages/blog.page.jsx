import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import './blog.page.scss'; // Import the SCSS file for the page
import CreatePost from '../components/createPost.component';



const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/posts/')
          .then(response => response.json())
          .then(data => setPosts(data));
  }, []);

  return (
      <div className="blog-container">
        <h1>Blog</h1>
        <div className="blog-posts">
        {posts.length === 0 && <p>There are no posts yet!</p>}
        {posts.map(post => {
          const dateObject = new Date(post.date);
          const postDate = `${dateObject.toLocaleString('default', { month: 'long' })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
          return (
          <div className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            
            <div className='blog-post-meta'>
              <p className='post-author'>By {post.author.name}</p>
              <p className='post-date'>{postDate}</p>
            </div>

            <p>{post.content}</p>

            { post.tags && post.tags.length > 0 &&
                <div className="blog-post-tags">
                  {post.tags.map(tag => (
                    <span key={tag.id}>
                    <FontAwesomeIcon icon={faTag} aria-label='tag'/>
                    {tag.name}</span>
                  ))}
                </div>
            }

              { post.comment_set && post.comment_set.length > 0 ? (
                post.comment_set.map((comment, index) => (
                    <p key={index}>{comment.content}</p>
                ))
              ) : (
                  <p>No comments yet.</p>
              )}

            </div>  
          )
        })}
        </div>
        <hr />
        <CreatePost />
      </div>
  );
};

export default BlogPage;
