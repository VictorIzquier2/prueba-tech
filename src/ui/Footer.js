import React, { Fragment } from 'react'
import {  Route, Switch, NavLink } from 'react-router-dom'

import { AboutUsScreen } from '../components/aboutUs/AboutUsScreen';
import { BlogScreen } from '../components/blog/BlogScreen';
import { BrandsScreen } from '../components/brands/BrandsScreen';

export const Footer = () => {
  return (
    <Fragment>
      <div>

        <div>
          <img src="/assets/images/logo-daitool-black.png" className="img-fluid" alt="Daitool black"/>
          <p>Daitool is the global reference site for high-quality, Japanese brand, industrial tools and supplies. We empower clients to build better, anywhere in the world.</p>
          <div>
            <i>Youtube</i>
            <i>LinkedIn</i>
            <i>Twitter</i>
            <i>Facebook</i>
            <i>Instagram</i>
          </div>
        </div>

        <div>
          <h5>Quick Links</h5>
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
            <Switch>
              <Route exact path='/aboutus' component={AboutUsScreen}/>
              <Route exact path='/aboutus' component={BlogScreen}/>
              <Route exact path='/aboutus' component={BrandsScreen}/>
            </Switch>
        </div>

        <div>
          <h5>Customer Area</h5>
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
            <Switch>
              <Route exact path='/aboutus' component={AboutUsScreen}/>
              <Route exact path='/aboutus' component={BlogScreen}/>
              <Route exact path='/aboutus' component={BrandsScreen}/>
            </Switch>
        </div>
      </div>
      <hr/>
      <div>
        <p>Daitool - &copy; 2021 All Rights Reserved </p>
      </div>

    </Fragment>
  )
}
