import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import Binhchon from './component/binhchon';
import Rank from './component/rank';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/voteTeam' element={<Binhchon/>} />
    <Route path='/rank' element={<Rank/>} />
    </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
