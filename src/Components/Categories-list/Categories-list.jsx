import { useState, useEffect } from 'react';
import { instance } from '../../Api/instance';
import { Container } from '../../Utils/Component';
import CategoryItem from './Categories-item';

const CategoriesList = () => {

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    instance.get('/categories')
    .then(response =>setCategoryData(response.data))
  }, []);

  return (
    
        <section>
          <Container/>
            <div className='category__item-wrapper'>
              {
                categoryData.map(item => 
                  <CategoryItem key={item.id} img={item.image} title={item.name}/>
                  )
              }

            </div>
        </section>
    
  );
}

export default CategoriesList;
