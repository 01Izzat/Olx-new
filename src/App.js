import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';
import SingleProduct from './Pages/SingleProduct/SingleProduct';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/message' element={<Message/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
