import React from 'react';

const Portfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl text-center font-bold">Hello there! I am Yamina </h1>
      <h3 class="text-2xl text-center font-bold">Email : yaminakathyyami@gmail.com </h3>
      <h1 class="text-xl">Skills : HTML,CSS,JS,React JS,NodeJS,MongoDB,Firebase </h1>
      <h1 class="text-xl ">Education : International Islamic University </h1>
      <p class="py-6">Best three Projects are 
      </p>
      <ul>
          <button className='btn btn-active btn-link'><a href='https://assignment-10-87e84.web.app'>First Project</a></button>
          <button className='btn btn-active btn-link'><a href='https://assignment-11-2f56a.web.app'>Second Project</a></button>
          <button className='btn btn-active btn-link'><a href='https://cute-sherbet-311920.netlify.app'>Third Project</a></button>
          
      </ul>
    </div>
  </div>
</div>
    );
};

export default Portfolio;