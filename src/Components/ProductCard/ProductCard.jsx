import React from 'react';
import { FiHeart } from 'react-icons/fi';


const ProductCard = ({data}) => {
  
    return (
        <div className='product__card'>
          
              <img className='product__img' src={data.images[0]} alt="img" />

              <h3 className='product__heading'>
                {data.title}
              </h3>
          

          <p className='product__desc'>
            {data.description}
          </p>
          <div className='product__price-wrapper'>
            <strong className='product__price'>
              ${data.price}
            </strong>
            <FiHeart/>
          </div>
        </div>
    );
}

export default ProductCard;
