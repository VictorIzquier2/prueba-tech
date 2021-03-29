import React from 'react';
import { mount } from "enzyme";
import { ProductScreen } from '../../../products/ProductScreen';
import { MemoryRouter } from 'react-router';


describe('Pruebas en <ProductScreen />', () => {

  const history = {
    length: 6,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  const wrapper = mount(
    <MemoryRouter initialEntries={['/home']}>
      <ProductScreen history={history} />
    </MemoryRouter>
  );

  test('Debe accionarse el componente redirect si no hay argumentos en el URL', () => {
    
    expect(wrapper.find('Redirect').exists()).toBe(true);

  }); 

})