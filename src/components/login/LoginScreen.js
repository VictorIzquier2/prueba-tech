import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

  const {dispatch} = useContext(AuthContext);

  const [formValues, handleInputChange] = useForm({
    name: 'Invitado'
  });

  const {name} = formValues;
  
  const handleLogin= (e) => {
    e.preventDefault();

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: name,
      }
    });
    history.replace(lastPath)
  }

  return (
    <div>
      <form
        onClick={handleLogin}
      >
        <input
          type='text'
          className='form-control'
          name='name'
          defaultValue='Invitado'
          onChange={handleInputChange}
          disabled
        />
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleLogin}
        >Login</button>
      </form>
    </div>
  )
}
