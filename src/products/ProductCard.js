import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({id, name, description, imageUrl, prize, lastPrize, qualification}) => {
  return (
    <div className='card'>
      <Link to={`./product/${id}`}>
        <img className='card-img-top' src={imageUrl} alt={name}/>
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
      </Link>
    </div>
  )
}
