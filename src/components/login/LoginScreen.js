import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--lighter);

  #login-form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--primary);
    width: 30rem;
    height: 20rem;
    padding: 2rem;
  }

  #login{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  #login label{
    margin: 1rem auto;
    color: var(--baseWhite);
    font-weight: bold;

  }

  #login small{
    align-self: flex-start;
    margin: 1rem;
    color: var(--baseWhite);
  }

  #login-form input{
    border-radius: 2rem;
    margin: 0 1rem;
    padding: .5rem 1rem;
    color: var(--baseDark);
    font-size: 1.25rem;
  }

  #login-form button{
    background-color: var(--secondary);
    font-weight: bold;
    color: var(--lighter);
    margin: 0 auto;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`;

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
    <Container fluid='md'>
      <Login>
        <form onClick={handleLogin} id='login-form'>
          <div id='login' className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              defaultValue='Invitado'
              aria-describedby="nameHelp"
              onChange={handleInputChange}
              disabled
            />
            <small 
              id='nameHelp'
              className='form-text texte-muted'
            >Welcome to Daitool!</small>
          </div>
          <button
            type='submit'
            className='btn'
            onClick={handleLogin}
          >Login</button>
        </form>
      </Login>
    </Container>
  )
}
