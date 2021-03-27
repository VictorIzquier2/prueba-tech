import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import {categories} from '../data/categories';

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 2rem auto;
  
  .card{
    padding: 0;
    margin: 0 1rem;
    border: none;
  }
  
  @media (min-width: 920px){
    .card{
      max-width: calc(33% - 1rem)
    }
  }
  @media (min-width: 768px){
    .card{
      max-width: calc(50% - 1rem)
    }
  }

  .card-body{
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .white{
    color: var(--baseWhite);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  img{ 
    max-width: 420px;
    border-radius: 1.5rem;
  }
`;

export const CategoriesList = () => {
  
  return (
    <Categories>
      {
        categories.map(category => (
          <Link 
            className='card' 
            key={category.id}
            to={`/${category.name}`}
          >
            <div className='card-body'>
              <h3 className='selectedProducts white'>{category.name}</h3>
              <img src={`${category.imageUrl}`}/>
            </div>
          </Link>
        ))
      }
    </Categories>
  )
}