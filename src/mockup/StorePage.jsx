import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductDescription from './ProductDescription';

import './storePage.css';

const StorePage = () => {
    const [activeProduct, setActiveProduct] = useState(0)
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData(){
            await axios.get('https://fakestoreapi.com/products?limit=5')
                .then(function(response){
                    console.log(response.data)
                    setData(response.data)
                })
        }
        fetchData();
    }, []) 

    const handleActiveProduct = (index) => {
        setActiveProduct(index);
    }

    return(data &&
        <div className="container">
            <div className="header">Heading</div>
            <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div style={{display: 'flex'}}>
                <div className="product-list-container">
                    {data.map((product, index) => {
                        return(
                            <ProductList key={index} product={product} handleActiveProduct={handleActiveProduct} index={index} activeProduct={activeProduct}/>
                        )
                    })}
                </div>
                <ProductDescription product={data[activeProduct]} />
            </div>
        </div>
    )
}

export default StorePage;