import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import useItem from '../../hooks/useItem';
import { toast } from 'react-toastify';
const ManageItem = () => {
    const [items, setItems] = useItem();

    const handleDelete = id =>{

    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount) {
            toast.success('Delete Successfully')
            
        }
        const remaining = items.filter(item => item._id !== id);
        setItems(remaining);
    })    
    }

    return (
        <div>
            <h2 className="text-2xl">Manage items: {items.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            
                            <th>Action</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                    {
                        items.map((item,index)=><tr key={item._id}>
                        <th>{index+1}</th>
                        <td><img src={item.img} alt='' width={30}/></td>
                        <td>{item.name}</td>
            
                        <td><label for="my-modal-6" class="btn modal-button"  >Remove Item</label></td>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations 
    random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn" onClick={() => handleDelete(item._id)}>Yay!</label>
    </div>
  </div>
  </div>
                    </tr>
                   

                    
                    )
                    }
                   
                    </tbody>
                </table>
           
        </div>
        </div>
    );
};

export default ManageItem;
