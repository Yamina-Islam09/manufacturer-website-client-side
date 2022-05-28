import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setReviews(data)} );
            
    }, [])

    return (
        <div className="mt-10 mb-10">
            <h2 className="text-center text-3xl font-bold text-warning mt-10">Our Reviews</h2>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-18">
            
             { reviews.map(review => <Review key={review._id} review={review}>
                </Review>)
            }
             
              
            </div>
        </div>
        
    );
};

export default Reviews;