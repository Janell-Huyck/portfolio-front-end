import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import './blog.page.scss'; // Import the SCSS file for the page
import CreatePost from '../components/createPost.component';
import BlogPagination from '../components/blogPagination.component';

const POSTS_PER_PAGE = 5;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // react-paginate uses zero indexed pages

  const fetchPosts = useCallback(() => {
    fetch('http://localhost:8000/posts/')
        .then(response => response.json())
        .then(data => setPosts(data));
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * POSTS_PER_PAGE;
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice().reverse().slice(offset, offset + POSTS_PER_PAGE);


  return (
      <div className="blog-container">
        <h1>Blog</h1>
        <div className="blog-posts">
        {posts.length === 0 && <p>There are no posts yet!</p>}
        {currentPosts.map(post => {
          const dateObject = new Date(post.date);
          const postDate = `${dateObject.toLocaleString('default', { month: 'long' })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
          return (
          <div className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            
            <div className='blog-post-meta'>
              <p className='post-author'>By {post.author.full_name}</p>
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
        <BlogPagination
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
        <hr />
        <CreatePost onPostCreate={fetchPosts} />
      </div>
  );
};

export default BlogPage;
