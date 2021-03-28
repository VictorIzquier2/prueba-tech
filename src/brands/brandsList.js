import React, {useRef} from 'react';
import {brands} from '../data/brands';
import styled from '@emotion/styled';

const Brands = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  margin: 8rem auto;

  @media(max-width: 768px){
    margin: 4rem auto;
  }

  h4{
    display: none;
    color: var(--light);
    font-size: 2.5rem;
    text-align: start; 
    width: 100%;
  }

  @media(max-width: 768px){
    h4{ 
      display: inline
    }
  }
  
  .brand{
    margin: 1rem;
    width: 12rem;
  }

  .brand img{
    width: 100%;
  }

  .arrow{
    position: absolute;
    top: 40%;
  }

  .leftArrow{
    left: 0%;
  }

  .rightArrow{
    right: 0%;
  }
    

  @media(max-width: 768px){
    .brand{
      display: flex;
      flex-direction: column;
      margin: 4rem auto;
      width: calc(50% - 1rem);
    }

    .brand img{
    max-width: calc(70%);
    align-self: center;
    }

    .arrow{
      display: none;
    }
  }
`;

export const BrandsList = () => {

  const brandsList = useRef();

  const handleScrollRight = () => {
    brandsList.current.scrollBy(180, 0);
  }

  const handleScrollLeft = () => {
    brandsList.current.scrollBy(-180, 0);
  }
  
  return (
    <Brands
      id='brands-list'
      ref={brandsList}
    >
      <h4>Our Brands</h4>
      <img 
        className='arrow leftArrow' 
        src='/assets/images/black-arrow-left-deselected.png' 
        alt='leftArrow'
        onClick={handleScrollLeft}
        />
      <img 
        className='arrow rightArrow' 
        src='/assets/images/black-arrow-right-deselected.png'
        alt='rightArrow'
        onClick={handleScrollRight}
        />
      {
        brands.map(brand => (
          <div className='brand' key={brand.id}>
            <img src={brand.imageUrl} alt={brand.name}/>
          </div>
        ))
      }
    </Brands>
  )
}