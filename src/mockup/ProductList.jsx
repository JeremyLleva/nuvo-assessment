import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

const ProductList = ({product, handleActiveProduct, index, activeProduct}) => {
    console.log(product)
    return(
        <div className='item-container'>
            <img alt={product.title}style={{ width: '20%', cursor: 'pointer'}} src={product.image} onClick={() => handleActiveProduct(index)}/>
            <div style={{ width: '50%', cursor: 'pointer'}} onClick={() => handleActiveProduct(index)}>{product.title}</div>
            <FontAwesomeIcon className={activeProduct !== index ? 'chevron-left' : 'chevron-left rotate'} icon={ faChevronCircleLeft } onClick={() => handleActiveProduct(index)}/>
        </div>
    )
}

export default ProductList;