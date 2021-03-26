import React from 'react';
import {values} from '../data/values';

export const ValuesList = () => {

  return (
    <ul>
      {
        values.map(value => (
          <li key={value.id}>
            {value.name}
          </li>
        ))
      }
    </ul>
  )
}