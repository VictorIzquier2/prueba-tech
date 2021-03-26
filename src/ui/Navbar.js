import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { SearchBar } from '../components/search/SearchBar'
import { types } from '../types/types'

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
    
      <nav className='navbar navbar-expand-sm'>
        <Link 
          className="navbar-brand" 
          to="/home"
        >
          Daitool
        </Link>
        <SearchBar history={history}/>

        {name ?
          (
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <button 
                  className='nav-item nav-link btn'
                  onClick={handleLogout}
                >
                    Logout
                </button>
                </ul>
            </div>
          ) :
          (
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/login"
                >
                    Login
                </NavLink>
                </ul>
            </div>
          )
        }

      </nav>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
      </nav>
    </Fragment>
  )
}