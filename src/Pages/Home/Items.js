import React, { useEffect, useState } from 'react';
import Item from '../Home/Item';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setItems(data)} );
            
    }, [])

    return (
        <div className="my-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             <div>
             { items.map(item => <Item key={item._id} item={item}>
                </Item>)
            }
             </div>
              
            </div>
        </div>
        
    );
};

export default Items;