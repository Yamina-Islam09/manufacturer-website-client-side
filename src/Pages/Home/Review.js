import React from 'react';
// import { useNavigate } from 'react-router-dom';
const Review = ({review}) => {
    const {_id, name,ratings, img, description} = review;
    // const navigate = useNavigate();

    // const navigateToItemDetail = id =>{
    //     navigate(`/review/${id}`);
    // }
    return (
      
<div class="card card-side lg:max-w-lg  bg-base-100 shadow-xl">
  <figure class=" w-2/4 pl-6"><img src={img} alt="Movie"  /></figure>
  <div class="card-body w-3/4">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p>Ratings : {ratings}</p>
  </div>
</div>
    );
};

export default Review;