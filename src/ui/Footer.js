import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { AboutUsScreen } from '../components/aboutUs/AboutUsScreen';
import { BlogScreen } from '../components/blog/BlogScreen';
import { BrandsScreen } from '../components/brands/BrandsScreen';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 6rem 4rem;
  width: 92%;
  
  @media(min-width: 768px){
    flex-direction: row;
  }

  .media{
    display: flex;
    justify-content: space-evenly;
    width: 100%
  }
  @media(min-width: 768px){
    .media{
      width: 35%;
      padding: 0;
      margin: 0 5%;
    }
  }
  
  #social-info{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2.5rem 0;
  }
  @media(min-width: 768px){
    #social-info{
      width: calc(25%);
    }
  }

  #social-info .logo{
    margin-bottom: 2rem;
    max-width: 16rem;
  }

  #social-info p{
    margin: 1rem 0;
  }

  #quick-links{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 2.5rem 0;
  }
  @media(min-width: 768px){
    #quick-links{
      width: calc(50%);
    }
  }

  #quick-links h4{
    margin-bottom: 2rem;
  }

  #quick-links .nav-link{
    margin: .5rem 0;
  }
  
  #customer-area{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 2.5rem 0;
  }

   @media(min-width: 768px){
    #customer-area{
      width: calc(50%);
    }
  }

  #customer-area h4{
    margin-bottom: 2rem;
  }

  #customer-area .nav-link{
    margin: .5rem 0;
  }

  #contact{
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0;
  }

   @media(min-width: 768px){
    #contact{
      width: calc(20%);
    }
  }

  #contact h4{
    margin-bottom: 2rem;
  }

  #contact p{
    margin: 2rem 0;
  }

  #contact button{
    text-transform: uppercase;
    margin: .2rem 0;
    padding: .5rem 2rem;
  }
  
  .nav-link{
    text-decoration: none;
    color: var(--baseDark);
  }

  .socialMedia {
    display: flex;
    margin: 1rem 0;
  }
  .card{
    border: none;
    width: 100%;
    padding: 0.75rem 0rem;
    margin: .5rem;
    background-color: var(--light);
    text-align: center;
  }
  .card i{
    padding: 0;
  }

  .contact-details{
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 768px){
    .contact-details{
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .contact-details button{
    margin: 0 auto;
    width: 10rem;
    border-radius: 1rem;
  }

  .phone {
    color: var(--primary);
    font-weight: 600;
  }

  .socialLink{
    text-decoration: none;
    color: var(--baseDark);
    transition: 0.3s;

    &:hover{
      color: var(--primary);
    }
  }
`;

const Last = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: 834px){
      flex-direction: column-reverse;
      justify-content: space-evenly;
      align-items: center;
  }

  .payment {
    display: flex;
    justify-content: space-between;
    width: 45%;
  }

   @media(max-width: 834px){
     .payment{
       width: 66%;
     }
     .payment span{
       display: none;
     }
   }
  .pay {
    text-transform: uppercase;
    font-style: italic;
    font-weight: 600;

    &:hover{
      cursor: pointer;
    }
  }

  .blue {
    color: blue;
  }

  .crimson {
    color: crimson;
  }

  .albero{
    color: goldenrod;
  }

`;

export const Footer = () => {
  return (
    <Fragment>
      <FooterStyled id='footer-styled'>
        <div className='col-4' id='social-info'>
          <img src="/assets/images/logo-daitool-black.png" className="img-fluid logo" alt="Daitool black"/>
          <p>Daitool is the global reference site for high-quality, Japanese brand, industrial tools and supplies. We empower clients to build better, anywhere in the world.</p>
          <div className='socialMedia'>
            <a className='socialLink card' href='https://www.youtube.com'>
              <i className='fab fa-youtube'></i>
            </a>
            <a className='socialLink card' href='https://www.linkedin.com'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a className='socialLink card' href='https://www.twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
            <a className='socialLink card' href='https://www.facebook.com'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a className='socialLink card' href='https://www.instagram.com'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
        <div className='media'>
          <div className='col-2' id='quick-links'>
            <h4>Quick Links</h4>
            <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/aboutus"
              >About Us</NavLink>
              <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/blog"
              >Blog</NavLink>
              <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/shop"
              >Shop</NavLink>
              <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/brands"
              >Brands</NavLink>
              <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/wholesale"
              >Wholesale</NavLink>
          </div>

          <div className='col-2' id='customer-area'>
          <h4>Customer Area</h4>
          <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/myaccount"
                >My Account</NavLink>
            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/deliveries"
                >Deliveries</NavLink>
            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/Helpcenter"
                >Help Center (FAQs)</NavLink>
            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/terms"
                >Terms</NavLink>
            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/privacypolicy"
                >Privacy Policy</NavLink>
          </div>
        </div>
        <div className='col-4' id='contact'>
          <h4>Contact</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <div className='contact-details'>
            <div>
              <h6>Have any questions?</h6>
              <p className='phone'>+123 456 7889</p>
            </div>
            <button
              className='btn btn-outline-info'
              >Contact</button>
          </div>
        </div>
      </FooterStyled>
      <hr/>
      
      <Last>
        <p>Daitool - &copy; 2021 All Rights Reserved </p>
        <div className='payment'>
          <span>Payment</span>
          <p className='blue pay'>Visa</p>
          <p className='crimson pay'>Master<span className='albero pay'>card</span></p>
          <p className='ocean pay'>Paypal</p>
          <p className='albero pay'>Bitcoin</p>
        </div>
      </Last>

    </Fragment>
  )
}
