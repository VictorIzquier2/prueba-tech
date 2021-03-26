import React from 'react';
import {blogs} from '../data/blogs';

export const BlogsList = () => {

  return (
    <ul>
      {
        blogs.map(blog => (
          <li key={blog.id}>
            {blog.name}
          </li>
        ))
      }
    </ul>
  )
}