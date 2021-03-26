import React from 'react'
import { useForm } from '../../hooks/useForm';

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
    <div>
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
          className='btn m-1 btn-block btn-outline-primary'
        >Search</button>
      </form>
    </div>
  )
}
