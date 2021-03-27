import React from 'react';
import styled from '@emotion/styled';

import { CategoriesList } from '../../categories/CategoriesList';
import { BrandsList} from '../../brands/brandsList';
import {ValuesList} from '../../values/ValuesList';
import { ProductsList } from '../../products/ProductsList';
import { BlogsList } from '../../blog/BlogsList';
import { Newsletter } from '../../newsletter/Newsletter';
import { Intro } from '../../intro/Intro';
import { Carrusel } from '../../carrusel/Carrusel';

const Home = styled.div`
  a{
    color: var(--primary);
    text-decoration: none;
  };

  .card{
    padding: 2.4rem 4.8rem;
    border: none;
  }

  .card-body.viewCat{ 
    background-color: var(--light);
    border-radius: 1.6rem;
  }

`

export const HomeScreen = () => {
  return (
    <Home>
      <Carrusel/>
      <Intro/>
      <CategoriesList/>
      <BrandsList/>
      <ValuesList/>
      <ProductsList/>
      <BlogsList/>
      <div>
        <img src="/assets/images/banner.png" className="img-fluid" alt="banner"/>
      </div>
      <Newsletter/>
    </Home>
  )
}
