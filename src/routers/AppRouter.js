import React, { Fragment, useContext } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Global, css} from '@emotion/react';

import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const {user} = useContext(AuthContext);
  
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
            line-height: 1.5rem;
            font-family: 'Mulish', sans-serif;
          }

          h1{
            font-weight: bold;
            font-size: 6.4rem;
            line-height: 8.6rem;
            letter-spacing: 0.02rem;
          }

          h2{
            font-weight: 400;
            font-size: 4.6rem;
            line-height: 6.2rem;
            letter-spacing: 0rem;
          }

          h3{
            font-weight: bold;
            font-size: 3rem;
            line-height: 4.6rem;
            letter-spacing: 0.01rem;
          }

          h4{
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 3.2rem;
            letter-spacing: 0.02rem;
          }

          h4 .regular{
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 2.4rem;
            letter-spacing: 0.01rem;
          }

          h5{
            font-weight: bold;
            font-size: 6.4rem;
            line-height: 8.6rem;
            letter-spacing: 0.02rem;
          }

          h6{
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 3rem;
            letter-spacing: 0.01rem;
          }

          h6 .selected{
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 3rem;
            letter-spacing: 0.01rem;
          }

          .copy{
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 3.4rem;
            letter-spacing: 0.02rem;
          }

          .inCopy .header {
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 3rem;
            letter-spacing: 0.02rem;
          }

          nav{
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 2.4rem;
            letter-spacing: 0.02rem
          }

          .breadcrumbs{
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2rem;
            letter-spacing: 0.02rem
          }

          .button{
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 2.4rem;
            letter-spacing: 0.02rem
          }

          .selectedProducts{
            font-weight: bold;
            font-size: 2rem;
            line-height: 2.8rem;
            letter-spacing: 0.02rem
          }

          .selectedProducts .smallerPrice{
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 8.6rem;
            letter-spacing: 0.02rem
          }

          .footer .header{
            font-weight: bold;
            font-size: 1.8rem;
            line-height: 2.4rem;
            letter-spacing: 0.02rem
          }
          
          .footer .links{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 3.6rem;
            letter-spacing: 0.02rem
          }

          .clientArea .header{
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 2.2rem;
            letter-spacing: 0.02rem
          }

          .clientArea .text{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 3.2rem;
            letter-spacing: 0.02rem
          }
          
          .clientArea .link{
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 2.2rem;
            letter-spacing: 0.02rem
          }
          
        `}
      />
      <Router>
        <div>
          <Switch>
            <PublicRoute 
              exact path='/login' 
              component={LoginScreen}
              isAuthenticated={user.logged}
            />
            <PrivateRoute 
              path='/' 
              component={DashboardRoutes}
              isAuthenticated={user.logged}
              />
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}
