import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({item}) => {
    const {_id, name,available,minimum, img, description, price} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl w-1/2" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>Price: {price}</p>
    <p>Available Quantity : {available}</p>
    <p>Minimum Order : {minimum}</p>
    <p>{description}</p>
    <div class="card-actions">
    <button onClick={() => navigateToItemDetail(_id)} className='btn btn-warning'>Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Item;