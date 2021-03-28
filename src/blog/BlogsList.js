import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import {blogs} from '../data/blogs';
import { NavLink } from 'react-router-dom';


const BlogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  h4{
    margin: 4rem 6rem;
    font-weight: bold;
  }

  @media(max-width: 768px){
    h4{
      color: var(--light);
      margin: 3rem;
    }
  }

  .nav-link{
    color: skyblue;
  }

`;

const Blogs = styled.div`
  display: flex;
  width: 90%;
  overflow-x: hidden;
  white-space: nowrap;
  margin: 0rem auto 4rem auto;
  
  .blog {
    margin: 1rem;
  }

  @media(max-width: 768px){
    .blog {
      width: 100%;
    }

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
        <h4>Blog Posts</h4>
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