import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SearchProducts from './Pages/SearchProducts/SearchProducts';
import Category from './Pages/Category/Category';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/message' element={<Message/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/search/:searchtitle' element={<SearchProducts/>} />
        <Route path='/category/:categoryId' element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;
