import React from 'react';
import styled from '@emotion/styled';

const NewsletterZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  padding: 4rem;
  margin: 0;

  @media(max-width: 834px){
    flex-direction: column;
    align-items: flex-start;
  }

  h4, p {
    color: var(--baseWhite);
  }

  .postcardsImg{
    margin: 2rem;
    position: relative;
    width: 100%;
  }

  #pop-subscribe{
    position: absolute;
    top: -20vw;
    left: 15vw;
    transform: translate(-50%, -50%)
  }
  #pop-subscribe h1{
    color: white;
    margin: 0;
  }

  #pop-subscribe button{
    background-color: var(--primary);
    border: none;
    padding: 1.25rem 2.5rem;
  }

  .general {
    margin: 2rem;
  }

  @media(max-width: 834px){
    .general{
      width: 100%
    }
  }

  .subscribe{
    margin: 2rem;
  }

  @media(max-width: 834px){
    .subscribe{
      width: 100%
    }
  }

  .newsletter {
    display: flex;
    padding: 1rem;
    background-color: var(--baseWhite);
    border-radius: 1rem;
  }
  
 @media(max-width: 834px){
   .newsletter{
     flex-direction: column;
     background-color: var(--primary);
   }
 }
 
  .newsletter input{
    width: 100%;
    border: none;
    padding: 1.5rem 0;
  }

  @media(max-width: 834px){
    .newsletter input{
      border-radius: 1rem;
      margin-bottom: 2rem;
      padding-left: 2rem;
    }
  }

  button {
    background-color: var(--baseDark);
    color: var(--baseWhite);
    padding: 1rem;
    align-self: flex-end;
    border-radius: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;


export const Newsletter = () => {
  return (
    <NewsletterZone className='row'>
      <div className='col-2 postcardsImg'>
        <div id='pop-subscribe'>
          <h1>70% off</h1>
          <button>Subscribe</button>
        </div>
        <img src="/assets/images/postcards.png" className="img-fluid" alt="banner"/>
      </div>
      <div className='general col-4'>
        <h4>Sign Up for Newsletter</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='subscribe col-4'>
        <form className='newsletter'>
          <input
            placeholder='Enter your email here'
          />
          <button>Subscribe</button>
        </form>
      </div>
    </NewsletterZone>
  )
}
