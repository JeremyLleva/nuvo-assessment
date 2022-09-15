import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './storepage.css';

const StorePage = () => {
    const [data, setData] = useState(null)
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
    return(data &&
        <div>
            Test
        </div>
    )
}

export default StorePage;