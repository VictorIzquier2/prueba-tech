import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getProductById } from '../selectors/getProductById';

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
    <div className='card'>
      <img className='card-img-top "animate__animated animate__fadeInLeft' src={imageUrl} alt={name}/>
      <div className='card-body'>
        <h5 className='card-title'>
          {name}
        </h5>
        <p className='card-text'>{description}</p>
        <div>
          <p className='card-text'>
            <small className='text-muted'>{lastPrize}</small>
          </p>
          <p className='card-text'>
            <small className='text-muted'>{prize}</small>
          </p>
          <p className='card-text'>
            <small className='text-muted'>{qualification}</small>
          </p>
        </div>
      </div>
      <button 
        className='btn btn-outline-info'
        onClick={handleReturn}
      >Return</button>
    </div>      
  )
}
