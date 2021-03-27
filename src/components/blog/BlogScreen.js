import React, {Fragment} from 'react'
import styled from '@emotion/styled';
import {blogs} from '../../data/blogs';
import { BlogsList } from '../../blog/BlogsList';

const BlogTitle = styled.h2`
  margin: 2rem 4rem;
  font-weight: bold;
`;

const Blogs = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  margin: 4rem;

  .blog {
    margin: 1rem;
  }
`;

export const BlogScreen = () => {
  return (
    <BlogsList/>
  )
}
