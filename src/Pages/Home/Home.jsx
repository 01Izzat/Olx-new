import React from 'react';
import Header from '../../Components/Header/Header';
import CategoriesList from '../../Components/Categories-list/Categories-list';
import ProductMain from '../../Components/ProductCard/ProductMain';
import Search from '../../Components/Search/Search';

const Home = () => {
  return (
    <>
      <Header/>
      <Search/>
      <CategoriesList/>
      <ProductMain/>
    </>
  );
}

export default Home;