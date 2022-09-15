import React from 'react';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

const StarRow = ({rating}) => {
    let starArray = []
    console.log(rating)
    while(rating > 0){
        console.log(rating)
        if(rating >= 1){
            rating--
            starArray.push(1)
        }else if (rating > 0.5){
            rating--
            starArray.push(0.5)
        }
    }
    while(starArray.length < 5){
        starArray.push(0)
    }
    let starRow = starArray.map((value) => {
        if(value === 1){     
            return (         
                <FontAwesomeIcon className="star-filled" icon={ faStar } />
            );
        }else if(value === 0.5){
            return (         
                <FontAwesomeIcon className="star-filled" icon={ faStarHalfStroke } />
            );
        }else{
            return (         
                <FontAwesomeIcon className="star-filled" icon={ faStarOutline } />
            );
        }
    })
    return starRow
}

const ProductDescription = ({product}) => {
    return(
        <div className='description-container'>
            <div className='item-price'>${product.price}</div>
            <div className='item-description'>{product.description}</div>
            <div className='star-container'>
                <StarRow rating={product.rating.rate} />
                <div style={{fontSize: 12, marginLeft: 5}}>{` ${product.rating.count}`}</div>
            </div>
            <button className="add-to-cart"> Add to Cart</button>
        </div>
    )
}

export default ProductDescription;