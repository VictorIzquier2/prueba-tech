import React from 'react';
import {values} from '../data/values';
import styled from '@emotion/styled';

const Values = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 4rem auto;
  
  .card {
    min-width: 19.2rem;
    position: relative;
    padding: 2.5rem .5rem;
    margin: 2.5rem auto;
    border: 1px solid var(--light);
    border-radius: 1.5rem;
    text-align: center;
  }

  .selected {
    margin-top: 1.5rem;
  }

  @media (min-width: 920px){
    .card{
      max-width: calc(20% - 1rem)
    }
  }
  @media (min-width: 768px){
    .card{
      max-width: calc(50% - 1rem)
    }
  }
  
  .value img{
    max-width: 6rem;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .value h6{
    font-weight: bold;
  }
`;

export const ValuesList = () => {
  
  return (
    <Values>
      {
        values.map(value => (
          <div className='value' key={value.id}>            
            <div className='card'>
              <img src={value.imageUrl}/>
              <h6 className='selected'>{value.name}</h6>
              <p>{value.description}</p>
            </div>
          </div>
        ))
      }
    </Values>
  )
}