import React from 'react'

export const Carrusel = () => {
  return (
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
  )
}
