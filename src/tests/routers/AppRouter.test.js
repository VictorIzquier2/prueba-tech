import React from 'react';
import { mount } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('Pruebas en <AppRouter />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  test('Debe mostrar el login si no está autentificado', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe mostrar el componente home si está autentificado', () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
      }
    }

     const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // Comprueba si la clase .card-body del componente Home se ha renderizado
    expect(wrapper.find('.card-body.viewCat').exists()).toBe(true);
    
  });
  

})