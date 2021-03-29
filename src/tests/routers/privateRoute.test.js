import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';


describe('Pruebas en <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/safety'
    }
  }   

  Storage.prototype.setItem = jest.fn();
  
  test('Debe de mostrar el componente si está autentificado y guardarlo en el localStorage', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={()=><span>Componente de pruebas</span>}
          {...props}
        />
      </MemoryRouter>
    )
    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/safety')
  });

  test('Debe de bloquear el componente si no está autentificado', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={()=><span>Componente de pruebas</span>}
          {...props}
        />
      </MemoryRouter>
    )
    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/safety')
  });
  
})