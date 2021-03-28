import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { categories } from '../data/categories';
import { Container } from 'react-bootstrap';

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem auto;
  
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

  @media(min-width: 768px){
    .card-body{
      text-align: start;
    }
  }  

  .white{
    color: var(--baseWhite);
    position: absolute;
    top: 45%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%)
  }


  .white-p{
    color: var(--baseWhite);
    position: absolute;
    top: 65%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
  }

  @media(min-width: 768px){
    .white-p{
    }
  }

  img{ 
    max-width: 320px;
    border-radius: 1.5rem;
  }
`;

export const CategoriesList = () => {
  
  return (
    <Container fluid='md'>
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
                <p className='white-p'>{category.description}</p>
                <img src={`${category.imageUrl}`} alt={`${category.name}`}/>
              </div>
            </Link>
          ))
        }
      </Categories>
    </Container>
  )
}