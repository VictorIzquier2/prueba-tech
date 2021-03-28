import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import { Banner1 } from './Banner1';
import { Banner2 } from './Banner2';

const MyBanner = styled.div`
  position: relative;

.postcardsImg{
    margin: 2rem;
    width: 100%;
  }

.row{
  margin: 0;
}

  #pop-subscribe{
    position: absolute;
    top: calc(10vh + 1vw);
    left: 15rem;
    transform: translate(-50%, -50%)
  }

  @media(max-width: 768px){
     #pop-subscribe{
      top: calc(10vh + 35vw);
      left: 10rem;
    }
  } 

  @media(max-width: 698px){
     #pop-subscribe{
      top: calc(15vh + 30vw);
      left: 10rem;
    }
  } 

  @media(max-width: 640px){
     #pop-subscribe{
      top: calc(15vh + 25vw);
      left: 10rem;
    }
  } 

  @media(max-width: 598px){
     #pop-subscribe{
      top: calc(15vh + 20vw);
      left: 10rem;
    }
  } 

  @media(max-width: 540px){
     #pop-subscribe{
      top: calc(15vh + 15vw);
      left: 10rem;
    }
  } 

  @media(max-width: 480px){
     #pop-subscribe{
      top: calc(15vh + 10vw);
      left: 9rem;
    }
  } 

  @media(max-width: 420px){
     #pop-subscribe{
      top: calc(15vh + 5vw);
      left: 8rem;
    }
  } 
  
  #pop-subscribe h1{
    color: white;
    margin: 0;
  }

  @media(max-width: 834px){
    #pop-subscribe h1{
      font-size: 5rem;
    }
  }
  @media(max-width: 768px){
     #pop-subscribe h1{
      font-size: 3rem;
      line-height: 5rem;
    }
  }  

`;

const SubscribeBtn = styled.button`
  background-color: var(--primary);
  color: var(--baseWhite);
  border: none;
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  font-weight: bold;
  text-transform: uppercase;  

  @media(max-width: 834px){
    background-color: var(--baseWhite);
    color: var(--baseDark);
    padding: 0.75rem 2rem;
  }


`;

const initialwidth = window.screen.availWidth;

export const Banner = () => {

  const [width = initialwidth, setWidth] = useState();

  useEffect(() => {

    const handleWidthState = (e) => {
      setWidth(e.currentTarget.innerWidth)
    }
    
    window.addEventListener('resize', handleWidthState);

    return () => {
      window.removeEventListener('resize', handleWidthState);
    }
  }, [width])
  return (
    <MyBanner>
      <div className='col-2 postcardsImg'>
        <div id='pop-subscribe'>
          <h1>70% off</h1>
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </div>
      </div>
      {(width > 768) && <Banner1 width={width}/>}
      {(width <= 768) && <Banner2 width={width}/>}
    </MyBanner>
  )
}
