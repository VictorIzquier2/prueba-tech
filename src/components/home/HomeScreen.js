import React from 'react';
import { CategoriesList } from '../../categories/CategoriesList';
import { BrandsList} from '../../brands/brandsList';
import {ValuesList} from '../../values/ValuesList';
import { ProductsList } from '../../products/ProductsList';
import { BlogsList } from '../../blog/BlogsList';
import { Newsletter } from '../../newsletter/Newsletter';

export const HomeScreen = () => {
  return (
    <div>
      <h1>Home</h1>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
             <img 
              src="/assets/images/main.jpg" 
              className="d-block w-100" 
              alt="daitool1">
             </img>
          </div>
        </div>
      </div>
      <div className='card' style={{width: '25rem'}}>
        <div className='card-body'>
          <a href='http://google.es'>viewed category</a>
          <h5 className='card-title'>Highlighted Product Category</h5>
          <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      </div>
      <div>
      
      </div>
      <CategoriesList/>
      <BrandsList/>
      <ValuesList/>
      <ProductsList/>
      <BlogsList/>
      <div>
        <img src="/assets/images/banner.png" className="img-fluid" alt="banner"/>
      </div>
      <Newsletter/>
    </div>
  )
}
