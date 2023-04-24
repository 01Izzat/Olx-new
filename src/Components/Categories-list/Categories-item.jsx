import React from 'react';
import { Link } from 'react-router-dom';
import './Categories-item.scss';

const CategoriesItem = ({img, title, id}) => {
  return (
    <Link to={`/category/${id}`} className='category'>
      <img className='category__item-img' src={img} alt="img" />
      
      <h2 className='category__item-heading'>{title}</h2>
    </Link>
  );
}

export default CategoriesItem;
