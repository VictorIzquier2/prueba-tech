import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

//const state = {
 // name: 'Invitado',
 // logged: true,
//}


describe('Pruebas en el authReducer', () => {
  test('Debe retornar el estado por defecto', () => {

    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});

  });

  test('Debe de autentificar y colocar el name del usuario', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Invitado'
      }
    }

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({logged: true, name: 'Invitado'});

  });

  test('Debe de borrar el nombre del usuario y cambiar logged a false', () => {

    const action = {
      type: types.logout
    }

    const state = authReducer({logged: true, name: 'Invitado'}, action);
    expect(state).toEqual({logged: false, name: undefined});

  });

})