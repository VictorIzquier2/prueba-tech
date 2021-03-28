import React, {useEffect} from 'react'

export const Banner1 = ({width}) => {

  useEffect(() =>{
  }, [width])

  return (
    <img 
      src="/assets/images/banner.png" 
      className="img-fluid banner" 
      alt="banner"
    />
  )
}
