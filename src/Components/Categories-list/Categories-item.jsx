import React from 'react';
import './Categories-item.scss';

const CategoriesItem = ({img, title}) => {
  return (
    <div className='category'>
      <img className='category__item-img' src={img} alt="img" />
      
      <h2 className='category__item-heading'>{title}</h2>
    </div>
  );
}

export default CategoriesItem;
