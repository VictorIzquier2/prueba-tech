import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { AuthContext } from '../auth/AuthContext'
import { SearchBar } from '../components/search/SearchBar'
import { types } from '../types/types'

const MainNav = styled.nav`
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary);
  padding: 2rem 4rem;

  .row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 67%;
    }

  .search{
    width: 50%;
  }

  .client-area{
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 720px){
    .row{
        flex-direction: column; 
        width: 80%  
    }
    .brand {
        align-self: flex-start;
        margin: 1rem 5rem;
    }
    .search {
      width: 80%;
    }
    #log-out{
      color: var(--baseWhite)!important;
    }
  }
  .icon{
    color: white;
    font-size: 2rem;
  }
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

`

const LogOut = styled.span`
  color: white;
  font-weight: bold;
`

const SecondNav = styled.nav`
  background-color: var(--secondary);
  
  .nav-link {
    color: var(--baseWhite);
  }

`

export const Navbar = ({history}) => {
    
    const{user: {name}, dispatch} = useContext(AuthContext);
    
    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        history.replace('/login');
    }
    
    return (
    <Fragment>
      <MainNav className='navbar navbar-expand-sm'>
        <div className='row'>
          <div className='col-2 brand'>
            <Link 
                className="navbar-brand" 
                to="/home"
                ><img src='/assets/images/logo-daitool.png'/></Link>
          </div>
          <div className='col-4 search'>
            <SearchBar history={history} />
          </div>
        </div>
          <div className='col-2'>
            {name ?
              (
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 client-area">
                  <div className="navbar-nav ml-auto">
                    
                    <Button 
                      className='nav-item nav-link btn'
                      onClick={handleLogout}
                      >
                        <i className="far fa-user icon"></i>
                        <LogOut id='log-out'>Log Out</LogOut>
                    </Button>
                    
                    <Button 
                      className='nav-item nav-link btn'
                      onClick={handleLogout}
                      >
                        <i className="fas fa-shopping-cart icon"></i>
                        <LogOut id='cart'>Cart</LogOut>
                    </Button>
                    
                    <Button 
                      className='nav-item nav-link btn'
                      onClick={handleLogout}
                      >
                        <LogOut id='currency'>En|USD</LogOut>
                    </Button>
                  
                  </div>
                </div>
              ) :
              (
               <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <div className="navbar-nav ml-auto">
                    <NavLink
                      activeClassName="active"
                      className="nav-item nav-link" 
                      id='login'
                      exact
                      to="/login"
                   >Log In</NavLink>
                  </div>
                </div>
              )
            }
          </div>
      </MainNav>

      <SecondNav className="navbar navbar-expand-sm">
          <div className="navbar-collapse">
              <div className="navbar-nav">

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/safety"
                  >
                      Safety
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/janitorial"
                  >
                      Janitorial
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/tools"
                  >
                      Tools
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/woodworking"
                  >
                      Woodworking
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/gardening"
                  >
                      Gardering
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/officesupplies"
                  >
                      Office Supplies
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/blog"
                  >
                      Blog
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/brands"
                  >
                      Brands
                  </NavLink>

                  <NavLink 
                      activeClassName="active"
                      className="nav-item nav-link" 
                      exact
                      to="/aboutus"
                  >
                      About Us
                  </NavLink>
              </div>
          </div>
      </SecondNav>
    </Fragment>
  )
}