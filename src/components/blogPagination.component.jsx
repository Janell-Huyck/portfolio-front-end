import React from 'react';
import Paginate from 'react-paginate';
import './blogPagination.styles.scss';

const BlogPagination = ({ pageCount, onPageChange }) => (
  <Paginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
);

export default BlogPagination;
