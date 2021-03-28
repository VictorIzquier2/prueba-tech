import React, {useEffect} from 'react';

export const Image2 = ({width}) => {

   useEffect(() => {
   }, [width])

  return (
     <img
        src='/assets/images/main2.jpg'
        className="d-block w-100" 
        alt="daitool2">
     </img>
  )
}
