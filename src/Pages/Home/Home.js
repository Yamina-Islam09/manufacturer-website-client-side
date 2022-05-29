import React from 'react';
import  { useEffect, useState } from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Item from './Item';
import Loading from '../Shared/Loading';
import Reviews from './Reviews'
import Gallery from './Gallery';
import BusinessSummary from './BusinessSummary';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [items, setItems] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data =>{
          setIsLoading(false)
            setItems(data)} );
    }, [])
    return (
        <div>
           
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <div className="my-18 mb-10">
            <h2 className="text-center text-3xl font-bold text-warning">Stored Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             
             { isLoading && <Loading></Loading>}
             { items.slice(0,6).map(item => <Item key={item._id} item={item}>
             </Item>)
         }
            
              
            </div>
        </div>
        <Gallery></Gallery>
        <Reviews></Reviews>
        
            <Contact></Contact>
            
        </div>
    );
};

export default Home;