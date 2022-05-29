import React from 'react';
import sleeping from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <h2 className='text-danger text-center'>You are in a Wrong Path</h2>
            <img className='img-fluid align-center' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;