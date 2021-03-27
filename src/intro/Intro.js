import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const IntroDaitool = styled.div`
  .card-body.viewCat {
    padding: 4rem;
    background-image: linear-gradient(to right, rgba(249,249,251,1) 0%,rgba(252,252,253,1) 50%,rgba(255,255,255,0) 100%), url('/assets/images/table-tools.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  p{
    width: 50%;
  }
`;

export const Intro = () => {
  return (
    <IntroDaitool className='card'>
      <div className='card-body viewCat'>
        <Link 
          to='/categories'
        >viewed category</Link>
        <h3  className='card-title'>Highlighted Product Category</h3 >
        <p className='card-text copy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
    </IntroDaitool>
  )
}
