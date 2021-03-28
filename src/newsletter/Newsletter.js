import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';

const NewsletterZone = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--primary);
  width: 100%;
  padding: 4rem;
  margin: 0;

  @media(max-width: 834px){
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h4, p {
    color: var(--baseWhite);
  }

  .general {
    margin: 2rem;
  }

  @media(max-width: 834px){
    .general{
      width: 100%
    }
  }
  
  .general h4{
    font-size: 2rem;
  }

  .general p{
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .postcards{
    max-width: 8rem;
    max-height: 8rem;
    margin: 0 1rem;
  }
  
  @media(max-width: 834px){
    .postcards{
      margin: 2rem;
    }
  }

  .subscribe{
    margin: 1rem;
  }

  @media(max-width: 834px){
    .subscribe{
      width: 100%
    }
  }

  .newsletter {
    display: flex;
    width: 35rem;
    padding: 1rem;
    background-color: var(--baseWhite);
    border-radius: 1rem;
    width: 95%;
  }
  
 @media(max-width: 834px){
   .newsletter{
     flex-direction: column;
     background-color: var(--primary);
     width: 100%;
   }
 }
 
  .newsletter input{
    width: 100%;
    border: none;
    padding: 1.5rem;
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
    <Container>
      <NewsletterZone className='row'>
          <img src="/assets/images/postcards.png" className="img-fluid postcards" alt="banner"/>
        <div className='general col -3'>
          <h4>Sign Up for Newsletter</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='subscribe col-5'>
          <form className='newsletter'>
            <input
              placeholder='Enter your email here'
            />
            <button>Subscribe</button>
          </form>
        </div>
      </NewsletterZone>
    </Container>
  )
}
