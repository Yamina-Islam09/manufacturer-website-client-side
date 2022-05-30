import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const Purchase = () => {
  const { itemId } = useParams();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState({});
  const [orderQuantity,setOrderQuantity]=useState('');
  const [error,setError]=useState('');

  const handleOrder=(event)=>{
   const {available,minimum}=items;
   const min=parseInt(minimum);
   const av=parseInt(available);
   console.log(event.target.value,min,av);
   if(event.target.value>min && event.target.value<av){
       setOrderQuantity(event.target.value);
   }
   else{
console.log('please give a proper order')
   }
  }

  useEffect(() => {
    fetch(`https://pacific-stream-39209.herokuapp.com/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handlequantity = (event) => {
    const { _id, img, price, name, available, minimum } = items;
    event.preventDefault();
    const qtn = parseInt(event.target.quantity.value);
    let value = parseInt(available) - qtn;
    const url = `https://pacific-stream-39209.herokuapp.com/item/${itemId}`;
    const booking = {
        itemIdId: _id,
        item: name,
        price:price*qtn,
        email: user.email,
        name: user.displayName,
        address:event.target.address.value,
        phone: event.target.phone.value
    }
    fetch('https://pacific-stream-39209.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast('Booking Successfully!')
                }
               
            });
    
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ available: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems({
          ...items,
          available: parseInt(available) - qtn,
        });
      });
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 items-center">
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <h2 className="text-warning font-bold text-3xl text-center mt-3">Item Details</h2>
        <figure class="px-10 pt-10">
          <img src={items.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{items.name}</h2>
          <p>Price : {items.price}</p>
          <p>Available Quantity : {items.available}</p>
          <p>Minimum Order : {items.minimum}</p>
         
        </div>
      </div>
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <h2 className="text-warning font-bold text-3xl text-center mt-3">Order Details</h2>
          <form onSubmit={handlequantity} className='p-12'>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs mt-3"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mt-3"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs mt-3"
            />
             <input
              type="number"
              name="quantity"
             
              placeholder="Enter minimum order"
              className="w-100 mt-3"
            />
           
            <input
              type="submit"
              
              value="Book Now"
              className="btn btn-secondary w-full max-w-xs mt-3"
            />
           
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
