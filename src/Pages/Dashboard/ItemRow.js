import React from 'react';


const ItemRow = ({ item, index, refetch, setDeletingItem }) => {
    
    const { name, img  } = item;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeletingItem(item)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};


      

export default ItemRow;