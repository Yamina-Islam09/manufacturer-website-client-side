import React from 'react';
import b1 from '../../images/b1.webp';
import b3 from '../../images/b3.webp';
import b4 from '../../images/b4.webp';

const Banner = () => {
    return (
        <div class="carousel w-full my-6 mb-10">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={b3} class="w-full" alt=''/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>  
  <div id="slide3" class="carousel-item relative w-full">
    <img src={b1} class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src={b4} class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;