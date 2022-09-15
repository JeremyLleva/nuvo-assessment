import React from 'react';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

//Component function to determine how many stars to fill and half-fill for rating
const StarRow = ({rating}) => {
    let starArray = [];
    for(let i = 0; i < 5; i++){
        if(rating >= 1){
            starArray.push(1)
        }else if(rating >= 0.5){
            starArray.push(0.5)
        }else{
            starArray.push(0)
        }
        rating--;
    }
    let starRow = starArray.map((value, index) => {
        if(value === 1){     
            return (         
                <FontAwesomeIcon key={index} className="star-filled" icon={ faStar } />
            );
        }else if(value === 0.5){
            return (         
                <FontAwesomeIcon key={index} className="star-filled" icon={ faStarHalfStroke } />
            );
        }else{
            return (         
                <FontAwesomeIcon key={index} className="star-filled" icon={ faStarOutline } />
            );
        }
    })
    return starRow
}

const ProductDescription = ({product}) => {
    return(
        <div className='description-container'>
            <div className='product-title'>{product.title}</div>
            <div className='item-price'>${product.price.toFixed(2)}</div>
            <div className='item-description'>{product.description}</div>
            <div className='star-container'>
                <StarRow rating={product.rating.rate} />
                <div style={{fontSize: 12, marginLeft: 5}}>{` (${product.rating.count})`}</div>
            </div>
            <button className="add-to-cart"> Add to Cart</button>
        </div>
    )
}

export default ProductDescription;