import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const BannerImg = styled.img`
  width: 100%;
`

export const Banner2 = ({width}) => {

  useEffect(() => {
  }, [width]);
    
    return (
    <BannerImg 
      src="/assets/images/banner2.png" 
      className="img-fluid banner" 
      alt="banner"
    />
  )
}
