import React from 'react';
import {values} from '../data/values';
import styled from '@emotion/styled';

const Values = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 4rem auto;

   h4{
    display: none;
    color: var(--light);
    font-size: 2.5rem;
    text-align: start; 
    width: 100%;
  }

  @media(max-width: 768px){
    h4{ 
      display: inline;
      margin-bottom: 4rem;
    }
  }
  
  .card {
    position: relative;
    min-width: 21rem;
    margin: 2.5rem auto;
    padding: 2.5rem .5rem;
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
    position: absolute;
    max-width: 6rem;
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
      <h4>Daitool Promise</h4>
      {
        values.map(value => (
          <div className='value' key={value.id}>            
            <div className='card'>
              <img src={value.imageUrl} alt={value.name}/>
              <h6 className='selected'>{value.name}</h6>
              <p>{value.description}</p>
            </div>
          </div>
        ))
      }
    </Values>
  )
}