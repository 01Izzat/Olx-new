import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/message' element={<Message/>} />
      </Routes>
    </div>
  );
}

export default App;
