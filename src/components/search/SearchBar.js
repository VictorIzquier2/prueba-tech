import React from 'react'
import { useForm } from '../../hooks/useForm';
import styled from '@emotion/styled';

const MainSearch = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 1.6rem;
  form{
    display: flex;
  }
  input{
    border: none;
  }

  button {
    border: none;
  }
  button img{
    width: 1.6rem;
  }
`;

export const SearchBar = ({history}) => {
  
  const [formValues, handleInputChange, reset] = useForm({
    searchText: ''
  });

  const {searchText} = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    // Enviar la búsqueda a la barra de navegación
    if(searchText.length > 1){
      history.push(`/search/q=${searchText}`);
      reset();
    }
  }
  
  return (
    <MainSearch>
      <form
        onClick={handleSearch}
      >
        <input
          type='text'
          placeholder='Find your Tool'
          className='form-control'
          name='searchText'
          autoComplete='off'
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-block btn-outline-primary'
        ><img src='/assets/images/lent.png' alt='Lent' /></button>
      </form>
    </MainSearch>
  )
}
