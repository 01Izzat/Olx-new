import React from 'react';
import Header from '../../Components/Header/Header';
import CategoriesList from '../../Components/Categories-list/Categories-list';
import ProductMain from '../../Components/ProductCard/ProductMain';

const Home = () => {
  return (
    <>
      <Header/>
      <CategoriesList/>
      <ProductMain/>
    </>
  );
}

export default Home;