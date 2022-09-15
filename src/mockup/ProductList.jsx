import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './productList.css';

const ProductList = ({product, handleActiveProduct, index, activeProduct}) => {
    return(
        <div className='item-container'>
            <img alt={product.title} className="product-img" src={product.image} onClick={() => handleActiveProduct(index)}/>
            <div className='item-title' onClick={() => handleActiveProduct(index)}>{product.title}</div>
            <FontAwesomeIcon className={activeProduct !== index ? 'chevron-left' : 'chevron-left rotate'} icon={ faChevronCircleLeft } onClick={() => handleActiveProduct(index)}/>
        </div>
    )
}

export default ProductList;