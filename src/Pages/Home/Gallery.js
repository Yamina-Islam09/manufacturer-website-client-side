import React from 'react';
import g1 from '../../images/g1.jpg'
import g2 from '../../images/g2.jpg'
import g3 from '../../images/g3.jpg'
import g4 from '../../images/g4.jpg'
import g5 from '../../images/g5.jpg'
import g6 from '../../images/g6.jpg'

const Gallary = () => {
    return (
        <section class="overflow-hidden text-gray-700 mb-18">
            <h2 className="text-center text-warning font-bold text-3xl">Our Gallery</h2>
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g1}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g2}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g4}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g5}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={g6} />
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Gallary;
