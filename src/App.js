import './App.scss';
// import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import CategoriesList from './Components/Categories-list/Categories-list';
import ProductMain from './Components/ProductCard/ProductMain';


function App() {
  return (
    <div className='App'>
      <Header/>
      <CategoriesList/>
      <ProductMain/>
    </div>
  );
}

export default App;
