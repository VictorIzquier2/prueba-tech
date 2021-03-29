import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from 'react-router';


describe('Pruebas en el <DashboardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Invitado'
    }
  }

  test('Debe evaluar que las rutas se muestran correctamente ', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('span').first().text().trim()).toBe('Log Out');

  });
  

})