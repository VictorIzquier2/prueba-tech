import React, {useEffect} from 'react'

export const Image = ({width}) => {

  useEffect(() => {
  }, [width]);

  return (
    <div>
      <img
        src='/assets/images/main.jpg'
        className="d-block w-100" 
        alt="daitool1">
     </img>
    </div>
  )
}
