import React, { useState, useEffect } from 'react';
import { instance } from '../../Api/instance'
import { Container } from '../../Utils/Component';
import ProductCard from './ProductCard';
import './ProductCard.scss';

const ProductMain = () => {
  
  const [productData, setProductData] = useState([])

  useEffect(() => {
    instance.get('/products')
      .then(response => setProductData(response.data))
  }, []);
  
  return (
      <section>
        <Container>
          <div className='product__main-wrapper'>
            {
              productData.map(item => {
                return <ProductCard  data={item}/>
              })
            }
          </div>
        </Container>
      </section>
  );
}

export default ProductMain;



