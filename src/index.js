import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeContext } from './Context/ThemeContext';
import './index.scss';
import { Provider } from 'react-redux';
import store from './Redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <ThemeContext>
        <Provider store={store}>
          <App/>
        </Provider>
      </ThemeContext>
    </BrowserRouter>
  
);


