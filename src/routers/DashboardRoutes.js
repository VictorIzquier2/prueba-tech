import React, {Fragment} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {Global, css} from '@emotion/react';

import { Navbar } from '../ui/Navbar';
import { HomeScreen } from '../components/home/HomeScreen';
import { AboutUsScreen } from '../components/aboutUs/AboutUsScreen';
import { BlogScreen } from '../components/blog/BlogScreen';
import { BrandsScreen } from '../components/brands/BrandsScreen';
import { GardeningScreen } from '../components/gardening/GardeningScreen';
import { JanitorialScreen } from '../components/janitorial/JanitorialScreen';
import { OfficeSuppliesScreen } from '../components/officeSupplies/OfficeSuppliesScreen';
import { SafetyScreen } from '../components/safety/SafetyScreen';
import { ToolsScreen } from '../components/tool/ToolsScreen';
import { WoodworkingScreen } from '../components/woodworking/WoodworkingScreen';
import {Footer} from '../ui/Footer';
import { ProductScreen } from '../products/ProductScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = ({history}) => {
  return (
    <Fragment>
      <Global
        styles={css`

          :root{

            // Primary colours
            --primary: #FF723D;
            --secondary: #92D2D9;

            // Light colours
            --light: #ECECEC;
            --lighter: #F9F9FB;

            // Base colours
            --baseDark: #232323;
            --baseWhite: white; 

            // Additional colours 
            --warningError: #FB5341;
            --links: #FF723D;
            --inBodyLinks: #FF723D

          }

          html {
            font-size: 62.5%; // 10px = 1rem
          }

          body{
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: 'Mulish', sans-serif;
          }

          h1{
            font-weight: bold;
            font-size: 6.4rem;
            line-height: 0.86;
            letter-spacing: 0.02rem;
          }

          h2{
            font-weight: 400;
            font-size: 4.6rem;
            line-height: 0.62;
            letter-spacing: 0rem;
          }

          h3{
            font-weight: bold;
            font-size: 3rem;
            line-height: 0.46;
            letter-spacing: 0.01rem;
          }

          h4{
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 0.32;
            letter-spacing: 0.02rem;
          }

          h4 .regular{
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 0.24;
            letter-spacing: 0.01rem;
          }

          h5{
            font-weight: bold;
            font-size: 6.4rem;
            line-height: 0.86;
            letter-spacing: 0.02rem;
          }

          h6{
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 0.3;
            letter-spacing: 0.01rem;
          }

          h6 .selected{
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 0.3;
            letter-spacing: 0.01rem;
          }

          .copy{
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 0.34;
            letter-spacing: 0.02rem;
          }

          .inCopy .header {
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 0.3;
            letter-spacing: 0.02rem;
          }

          nav{
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 0.24;
            letter-spacing: 0.02rem
          }

          .breadcrumbs{
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 0.20;
            letter-spacing: 0.02rem
          }

          .button{
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 0.24;
            letter-spacing: 0.02rem
          }

          .selectedProducts{
            font-weight: bold;
            font-size: 2rem;
            line-height: 0.28;
            letter-spacing: 0.02rem
          }

          .selectedProducts .smallerPrice{
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 0.86;
            letter-spacing: 0.02rem
          }

          .footer .header{
            font-weight: bold;
            font-size: 1.8rem;
            line-height: 0.24;
            letter-spacing: 0.02rem
          }
          
          .footer .links{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 0.36;
            letter-spacing: 0.02rem
          }

          .clientArea .header{
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 0.22;
            letter-spacing: 0.02rem
          }

          .clientArea .text{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 0.32;
            letter-spacing: 0.02rem
          }

          .clientArea .link{
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 0.22;
            letter-spacing: 0.02rem
          }

        `}
      />
      <Navbar history={history}/>
      <div>
        <Switch>
          <Route exact path='/home' component={HomeScreen}/>
          <Route exact path='/safety' component={SafetyScreen}/>
          <Route exact path='/janitorial' component={JanitorialScreen}/>
          <Route exact path='/tools' component={ToolsScreen}/>
          <Route exact path='/woodworking' component={WoodworkingScreen}/>
          <Route exact path='/gardening' component={GardeningScreen}/>
          <Route exact path='/officesupplies' component={OfficeSuppliesScreen}/>
          <Route exact path='/blog' component={BlogScreen}/>
          <Route exact path='/brands' component={BrandsScreen}/>
          <Route exact path='/aboutus' component={AboutUsScreen}/>
          <Route exact path='/product/:productId' component={ProductScreen}/>
          <Route exact path='/search/:search' component={SearchScreen}/>
          <Redirect to='/home' component={HomeScreen}/>
        </Switch>
      </div>
      <Footer/>
    </Fragment>
  )
}
