import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {Navbar, Nav, Dropdown, NavDropdown, DropdownButton} from 'react-bootstrap';


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
  padding: 2rem 4rem;

  .row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 67%;
    }

  .brand {
    display: flex;
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

const Second = styled.div`
  background-color: var(--primary);
  padding: 1rem;
  
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
  
  .white{
    background-color: white;
    border: 1px solid var(--light);
    padding-right: 5rem
  }
  .dropdown-divider {
    margin-left: 5rem;
  }
  
  .fa-phone-alt, .fa-envelope{
    color: var(--primary)!important;
    margin-left: 5rem;
    margin-right: 1rem;
  }

  .fa-envelope{
    padding-bottom: 8rem;
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
  padding: 1rem; 
  
  .nav-link {
    color: var(--baseWhite)!important;
  }

  span{
    color: var(--baseDark);
    font-weight: bold;
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
              title={<i class="fas fa-bars"></i>}
            >
              <NavDropdown.Item>
                <Navbar.Brand href="/home">
                  <i className='fas fa-times dissapear'></i><img className='dissapear' src='/assets/images/logo-daitool-black.png'/>
                </Navbar.Brand>
              </NavDropdown.Item>
              <Nav.Link className='nav-link' href="/safety">Safety</Nav.Link>
              <Nav.Link className='nav-link' href="/janitorial">Janitorial</Nav.Link>
              
              <Nav.Link className='nav-link' href="/tools">Tools</Nav.Link>
              <Nav.Link className='nav-link' href="/gardening">Gardening</Nav.Link>
              <Nav.Link className='nav-link' href="/officesupples">Office Supplies</Nav.Link>
              <Nav.Link className='nav-link' href="/woodworking">Woodworking</Nav.Link>
              <Nav.Link className='nav-link' href="/gardening">Gardening</Nav.Link>
              <Nav.Link className='nav-link' href="/officesupples">Office Supplies</Nav.Link>
              <NavDropdown.Divider />
              <Navbar.Brand href="/aboutus"><h4 className='about'>About Us</h4></Navbar.Brand>
              <Nav.Link className='nav-link' href="/blog">Blog</Nav.Link>
              <Nav.Link className='nav-link' href="/brands">Brands</Nav.Link>
              <NavDropdown.Divider />
              <Navbar.Brand href="/aboutus"><h4>Need Help?</h4></Navbar.Brand>
              <Navbar.Brand href="/aboutus"><span className='primary'><i class="fas fa-phone-alt"></i>+ 123 456 789</span></Navbar.Brand>
              <br/>
              <Navbar.Brand href="/aboutus"><span className='primary'><i class="far fa-envelope"></i>info@daitool</span></Navbar.Brand>
            </DropdownButton>
          </Second>

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

              <Nav.Link className='nav-link' href="/janitorial">Janitorial</Nav.Link>
              <NavDropdown 
                title="Tools"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className='nav-link' href="/tools"><span>View All</span></NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className='nav-link' href="/woodworking">Woodworking</Nav.Link>
              <Nav.Link className='nav-link' href="/gardening">Gardening</Nav.Link>
              <Nav.Link className='nav-link' href="/officesupples">Office Supples</Nav.Link>
              <Nav.Link className='nav-link' href="/blog">Blog</Nav.Link>
              <Nav.Link className='nav-link' href="/brands">Brands</Nav.Link>
              <Nav.Link className='nav-link' href="/aboutus">About Us</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </ThirdNav>
    
    </Global>

  )
}