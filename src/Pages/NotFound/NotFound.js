import React from 'react';
import sleeping from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className=' mt-5 lg:max-w-lg mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <h2 className='text-red-500 text-center'>You are in a Wrong Path</h2>
            <img className='img-fluid items-center' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;