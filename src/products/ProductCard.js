import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Product = styled.div`
  padding: 1rem!important;
  margin: 4rem 2rem;
  
  .product{
    display: flex;
    flex-direction: column;
    width: 32rem;
    padding: 1rem;
    margin: 0 auto;
    background-color: var(--baseWhite);
    border-radius: 2rem;
    text-decoration: none;
  }

  .product img{
    max-width: 28.5rem;
  }
  
  #product-title{
    color: var(--baseDark);
  }

  #description{
    color: var(--baseDark);
  }

  .details{
    display: flex;
    justify-content: space-between;
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

export const ProductCard = ({id, name, description, imageUrl, prize, lastPrize, qualification}) => {
  
  return (
    <Product>
      <Link className='product' to={`./product/${id}`}>
        <img className='card-img-top' src={imageUrl} alt={name}/>
        <div className='card-body'>
          <h4 id='product-title' className='card-title'>
            {name}
          </h4 >
          <p id='description' className='card-text'>{description}</p>
          <div className='details'>
            <p id='last-prize' className='card-text'>
              <small className='text-muted'>${lastPrize}</small>
            </p>
            <p id='prize' className='card-text'>
              <small className='text-muted'>${prize}</small>
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
      </Link>
    </Product>
  )
}
