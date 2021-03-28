import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const IntroDaitool = styled.div`

  .card-body.viewCat {
    align-self: center;
    padding: 8rem 4rem;
    margin: 4rem;
    background-image: linear-gradient(to right, rgba(249,249,251,1) 0%,rgba(252,252,253,1) 50%,rgba(255,255,255,0) 100%), url('/assets/images/table-tools.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-title{
    width: 50%;
  }
  
  p{
    width: 50%;
  }
  
  @media(max-width: 768px){
    
    .card-body.viewCat {
      align-self: center;
      padding: 4rem 1.5rem;
      margin: 2rem auto;
      width: 90%;
    }

    .card-title{
      font-size: 2.4rem;
      line-height: 2.4rem;
      margin-top: 1rem;
    }

    .card-text.copy{
      font-size: 1.2rem;
      line-height: 1.5rem;
      width: 100%;
    }
  }
  
`;

export const Intro = () => {
  return (
    <IntroDaitool>
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
