import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import {blogs} from '../data/blogs';
import { NavLink } from 'react-router-dom';


const BlogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    margin: 2rem 4rem;
    font-weight: bold;
  }

  .nav-link{
    color: skyblue;
  }

`;

const Blogs = styled.div`
  display: flex;
  width: 90%;
  overflow-x: auto;
  white-space: nowrap;
  margin: 4rem;
  
  .blog {
    margin: 1rem;
    max-width: calc(30% - 1rem);
  }

  .blog h4 {
    font-size: 1.5rem;
  }

  .blog span{
    font-size: 1rem;
  }
`;

export const BlogsList = () => {
  
  return (
    <Fragment>
      <BlogHeader className='header'>
        <h2>Blog Posts</h2>
        <NavLink className='nav-item nav-link' to='/blog'>+ View All</NavLink>
      </BlogHeader>
      <Blogs>
        {
          blogs.map(blog => (
            <div className='blog' key={blog.id}>
              <img className='card-img-top' src={blog.imageUrl} alt={blog.name}/>
              <div className='card-body'>
                <h4 className='card-title'>
                  {blog.name}
                </h4>
                <span>{blog.author}</span>
              </div>
            </div>
          ))
        }
      </Blogs>
    </Fragment>
  )
}