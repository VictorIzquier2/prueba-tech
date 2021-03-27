import React from 'react';
import {brands} from '../data/brands';
import styled from '@emotion/styled';

const Brands = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  margin: 4rem auto;

  .brand{
    margin: 1rem;
  }
`;

export const BrandsList = () => {
  
  return (
    <Brands>
      {
        brands.map(brand => (
          <div className='brand' key={brand.id}>
            <img src={brand.imageUrl}/>
          </div>
        ))
      }
    </Brands>
  )
}