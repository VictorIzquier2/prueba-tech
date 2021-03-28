import React, {useRef} from 'react';
import styled from '@emotion/styled';

import {products} from '../data/products';
import { ProductCard } from './ProductCard';
import { Container } from 'react-bootstrap';


const Scroller = styled.div`
  width: 100%;
  position: relative;
  `;
  
const Ad = styled.div`
  width: 30%;
  position: absolute;
  top: 35%;
  left: 10%;
  transform: translate(-10%, -25%);
  z-index: 10;

  @media(max-width: 768px){
    h4{
      display: none;
    }
  }
  
  .arrow{
    margin: 4rem 1rem;
    filter: grayscale(100%);
    transition: 0.3s;
  }

  @media(max-width: 768px){
    .arrow{
      margin: 2rem 1rem;
    }
  }
  .arrow:hover{
    filter: grayscale(0%);
  }
  `;

const ProductList = styled.div`
  display: flex;
  background-color: var(--light);
  width: 100%;
  overflow-x: hidden;
  white-space: nowrap;
  padding-left: 35%;
  
  @media(max-width: 768px){
    background-color: var(--baseWhite);
    padding-left: 5%;
  }

  `;


export const ProductsList = () => {
  
  const productList = useRef();
  
  const handleScrollRight = () => {
    productList.current.scrollBy(180, 0);
  }
  
  const handleScrollLeft = () => {
    productList.current.scrollBy(-180, 0);
  }
  
  return (
    <Container fluid='md'>
      <Scroller className='scroller'>
        <Ad className='ad'>
          <h4>This Weeks Top 10 Selected Products</h4>
          <img 
            className='arrow leftArrow' 
            src='/assets/images/left-arrow.png' 
            alt='leftArrow'
            onClick={handleScrollLeft}
            />
          <img 
            className='arrow rightArrow' 
            src='/assets/images/right-arrow.png' 
            alt='rightArrow'
            onClick={handleScrollRight}
          />
        </Ad>
        <ProductList 
          id='product-list' 
          className='card-deck animate__animated animate__fadeIn'
          ref={productList}
          >

          {
            products.map(product => (
              <ProductCard 
                { ...product }
                key={product.id}>
              </ProductCard>
            ))
          }
        </ProductList>
      </Scroller>
    </Container>
  )
}