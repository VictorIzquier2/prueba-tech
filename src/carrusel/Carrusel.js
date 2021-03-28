import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'
import { Image } from './Image';
import { Image2 } from './Image2';
import { Container } from 'react-bootstrap';

const MyCarrusel = styled.div`
  .carousel-item.active{
    position: relative;
  }
  
  .card{
    position: absolute;
    top: calc(8vh + 1vw);
    right: calc(0vh + 10vw);
    background-color: rgba(0,0,0,0); 
  }

  @media(max-width: 768px){
    
    .card{
      top: calc(70vw - 10vh);
      right: calc(0vw - 1vh);
    }
  }

  .card-body{
    text-align: right;
  }

  .card-title{
    color: var(--baseWhite);
    margin-bottom: 0;
    line-height: 3rem;
  }

  .card-text.copy {
    color: var(--baseWhite);
    font-size: 2.75rem;
    font-weight: 200;
  }

  .invitation{
    text-decoration: underline;
  }
`;

const initialWidth = window.screen.availWidth;

export const Carrusel = () => {
  
  const [width = initialWidth, setWidth] = useState();

  useEffect(() => {

    const handleWidthState = (e) =>{
      setWidth(e.currentTarget.innerWidth);
    }

    window.addEventListener('resize', handleWidthState);

    return() => {
      window.removeEventListener('resize', handleWidthState);
    }

  },[width]);
  
  return (
    <Container fluid='md'>
      <MyCarrusel id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>New Products</h3 >
                <h4 className='card-text copy'>Japan</h4>
                <Link
                  className='invitation'
                  to='/categories'
                >Discover now</Link>
              </div>
            </div>
            {(width > 768) && <Image width={width}/>}
            {(width <= 768) && <Image2 width={width}/>}
          </div>
        </div>
      </MyCarrusel>
    </Container>
  )
}
