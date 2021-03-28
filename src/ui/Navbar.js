import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {Navbar, NavbarBrand, Nav, NavDropdown, DropdownButton} from 'react-bootstrap';


import { AuthContext } from '../auth/AuthContext'
import { SearchBar } from '../components/search/SearchBar'
import { types } from '../types/types'

const Global = styled.div`

  #second{
    display: block;
  }
  
  #third{
    display: none!important;
  }

  @media(min-width: 768px){
    #second{
      display: none!important;
    }
    
    #third{
      display: block!important;
    }
    
  }
`;

const MainNav = styled.nav`
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary);
  padding: 2rem;

  .row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 67%;
    }
    
  .brand {
    position: relative;
    display: flex;
    align-items: center;
    margin: 1rem 5rem;
  }

  .main-logo{
    max-width: 12rem;
  }

  .search{
    width: 50%;
  }

  .client-area{
    position: absolute;
    top: 4rem;
    right: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  .nav-item.nav-link.btn{
    margin: 0 .5rem;
  }

  #articles{
    position: relative;
    align-self: flex-start;
  }

  #number{
    position: absolute;
    top: -.5rem;
    right: -1.75rem;
    background-color: var(--baseWhite);
    color: var(--primary);
    font-size: 1rem;
    font-weight: bold;
    padding: 0 .75rem;
    border-radius: 100%;
  }

  @media(min-width: 720px){
    #number{
      right: -1.5rem;
    }
  }

  @media (max-width: 720px){
    .row{
        flex-direction: column; 
        width: 100%  
    }
    .brand {
        align-self: flex-start;
        margin: 1rem 0rem;
    }
    .search {
      width: 100%;
    }

    #log-out{
      color: var(--baseWhite)!important;
    }

    #currency{
      display: none;
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

const Second = styled.div`
  background-color: var(--primary);
  padding: 1rem;

  .dropdown-menu.show.dropdown-menu-right{
    position: relative;
    padding-top: 1rem;
    padding-bottom: 8rem;
    border: 1.2rem solid var(--secondary);
    border-top: 3rem solid var(--secondary);
  }

  .dropdown-menu.show.dropdown-menu-right::before{
    position: absolute;
    border: 12px solid var(--secondary);
    content: '';
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: -2.4rem;
    left: -3rem;
    transform: rotate(90deg);
  }
  
  .nav-link {
    color: var(--baseDark)!important;
    margin-left: 5rem;
  }
  
  span, h4{
    color: var(--baseDark);
    font-weight: bold;
  }

  h4{
    margin-left: 5rem;
  }

  .about{
    margin-bottom: -2.5rem;
  }
  
  .fa-times{
    color: var(--baseDark);
    margin: 2rem;
  }
  
  .dropdown-divider {
    margin-left: 5rem;
  }
  
  .fa-phone-alt, .fa-envelope{
    color: var(--primary)!important;
    margin-left: 5rem;
    margin-right: 1rem;
  }

  .primary{
    color: var(--primary);
  }

  .dropdown-toggle.btn.btn-primary{
    background-color: var(--primary)!important;
    border: none;
  }

  #drop-right .fa-bars{
    font-size: 3rem;
  }

  #drop-right::after{
    display: none;
  }



`
const ThirdNav = styled.div`
  background-color: var(--secondary);
   
   
  .dropdown-menu.show{
    background-color: var(--secondary);
  }
  
  .dropdown-menu.show:hover span{
    color: var(--baseDark);
    font-weight: bold;
    transition: 0.3s;
  }

  .mr-auto.navbar-nav{
    margin: 0 2.5rem;
  }

  .nav-link {
    color: var(--baseWhite)!important;
    text-align: center;
  }

  @media(min-width: 1140px){
    .nav-link{
      margin: 0 1.5rem;
    }
  }

  span{
    color: var(--baseWhite);
    font-weight: 600;
  }

  
  .fa-times{
    color: var(--baseDark);
    margin: 2rem;
  }

  @media(min-width: 768px){
    .dissapear{
      display: none;
    }
  }
`;

export const MyNavbar = ({history}) => {
    
    const{user: {name}, dispatch} = useContext(AuthContext);
    
    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        history.replace('/login');
    }
    
    return (

    <Global>

      <MainNav className='navbar navbar-expand-md'>
        <div className='row'>
          <div className='col-2 brand'>
          
          <Second id='second'>
            <DropdownButton
              drop='right'
              id='drop-right'
              className='bars'
              menuAlign='right'
              title={<i className="fas fa-bars"></i>}
            >
              <NavbarBrand href="/home">
                <i className='fas fa-times dissapear'></i><img className='dissapear' src='/assets/images/logo-daitool-black.png' alt='Daitool Logo Black'/>
              </NavbarBrand>
            
              <Link className='nav-link' to="/safety">Safety</Link>
              <Link className='nav-link' to="/janitorial">Janitorial</Link>
              <Link className='nav-link' to="/tools">Tools</Link>
              <Link className='nav-link' to="/gardening">Gardening</Link>
              <Link className='nav-link' to="/officesupples">Office Supplies</Link>
              <Link className='nav-link' to="/woodworking">Woodworking</Link>
              <Link className='nav-link' to="/gardening">Gardening</Link>
              <Link className='nav-link' to="/officesupples">Office Supplies</Link>
              <NavDropdown.Divider />
              <NavbarBrand href="/aboutus"><h4 className='about'>About Us</h4></NavbarBrand>
              <Link className='nav-link' to="/blog">Blog</Link>
              <Link className='nav-link' to="/brands">Brands</Link>
              <NavDropdown.Divider />
              <NavbarBrand href="/aboutus"><h4>Need Help?</h4></NavbarBrand>
              <NavbarBrand href="/aboutus"><span className='primary'><i className="fas fa-phone-alt"></i>+ 123 456 789</span></NavbarBrand>
              <br/>
              <NavbarBrand href="/aboutus"><span className='primary'><i className="far fa-envelope"></i>info@daitool</span></NavbarBrand>
            </DropdownButton>
          </Second>

            <Link 
                className="navbar-brand" 
                to="/home"
                ><img className='main-logo' src='/assets/images/logo-daitool.png' alt='Daitool Logo'/></Link>
          </div>
          <div className='col-4 search'>
            <SearchBar history={history} />
          </div>
        </div>
          <div className='col-2'>
            {name ?
              (
                <div className="navbar-nav client-area">

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
                  <div id='articles'>
                    <span id='number'>1</span>
                  </div>
                  <Button 
                    className='nav-item nav-link btn'
                    onClick={handleLogout}
                    >
                      <LogOut id='currency'>En|USD</LogOut>
                  </Button>
                
                </div>
              ) :
              (
                <div className="navbar-nav client-area">
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link" 
                    id='login'
                    exact
                    to="/login"
                    >Log In</NavLink>
                </div>
              )
            }
          </div>
      </MainNav>

      
      <ThirdNav id='third'>
        <Navbar collapseOnSelect expand="md">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown 
                title="Safety"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className='nav-link' href="/safety"><span>View All</span></NavDropdown.Item>
          
              </NavDropdown>

              <Link className='nav-link' to="/janitorial">Janitorial</Link>
              <NavDropdown 
                title="Tools"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className='nav-link' href="/tools"><span>View All</span></NavDropdown.Item>
              </NavDropdown>

              <Link className='nav-link' to="/woodworking">Woodworking</Link>
              <Link className='nav-link' to="/gardening">Gardening</Link>
              <Link className='nav-link' to="/officesupples">Office Supples</Link>
              <Link className='nav-link' to="/blog">Blog</Link>
              <Link className='nav-link' to="/brands">Brands</Link>
              <Link className='nav-link' to="/aboutus">About Us</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </ThirdNav>
    
    </Global>

  )
}