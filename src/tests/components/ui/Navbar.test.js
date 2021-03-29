import React from 'react';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router';
import { MyNavbar } from '../../../ui/Navbar';
import { types } from '../../../types/types';





describe('Pruebas en <Navbar />', () => {

  
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Invitado'
    }
  }
  
  const history = {
    push: jest.fn(),
    replace: jest.fn(),
    location: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn()
  }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <MyNavbar history={history}/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    afterEach(() => {
      jest.clearAllMocks();
    })

  test('Debe de mostrarse correctamente', () => {
    
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.contains( <img alt="Daitool Logo" className="main-logo" src="/assets/images/logo-daitool.png" />)).toEqual(true);
  });

  test('Debe de llamar logout y usar history', () => {
    
    wrapper.find('button').at(2).prop('onClick')();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });

    expect(history.replace).toHaveBeenCalledWith('/login');
    
  });
  

})