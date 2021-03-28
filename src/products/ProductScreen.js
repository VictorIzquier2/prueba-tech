import React, { Fragment, useMemo } from 'react';
import styled from '@emotion/styled';

import { Redirect, useParams } from 'react-router-dom';
import { getProductById } from '../selectors/getProductById';

const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto!important;
  width: 32.5rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: var(--baseWhite);
  border-radius: 2rem;


  .maxWidth28 {
    max-width: 28.5rem;
  }

  .maxWidth32 {
    max-width: 32.5rem;
  }

  .details{
    display: flex;
    justify-content: space-between
  }

  #last-prize small{
    color: var(--primary)!important;
  }

  #prize small{
    text-decoration: line-through;
  }

  .fa-star{
    color: var(--primary);
  }


`;

export const ProductScreen = ({history}) => {

  const {productId} = useParams();

  // Obtimización de la consulta productId con el hook de react useMemo
  const product = useMemo(() => getProductById(Number(productId)), [productId])
  //const product = getProductById(Number(productId));

  if(!product) return <Redirect to='/'/>;

  const handleReturn = () => {
    console.log('hiciste click en el return!');
    if(history.length <= 2){
      history.replace('/')
    }
    history.goBack();
  }

  const {name, description, imageUrl, prize, lastPrize, qualification} = product;

  return (
    <Product className='card maxWidth32 animate__animated animate__fadeInLeft'>
      {<img className='card-img-top maxWidth28' src={imageUrl} alt={name}/>}
      <div className='card-body'>
        <h4 className='card-title'>
          {name}
        </h4>
        <p id='description' className='card-text'>{description}</p>
        <div className='details'>
          <p id='last-prize' className='card-text'>
            <small className='text-muted'>{lastPrize}</small>
          </p>
          <p id='prize' className='card-text'>
            <small className='text-muted'>{prize}</small>
          </p>
          <p id='stars' className='card-text'>
            <small className='text-muted'>
                {qualification === 4 &&
                <Fragment>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </Fragment>
                }
              </small>
          </p>
        </div>
      </div>
      <button 
        className='btn btn-outline-info'
        onClick={handleReturn}
      >Return</button>
    </Product>      
  )
}
