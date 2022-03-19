import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './Pages/Contato/Contato';
import Promocao from './Pages/Promocao/Promocao';
import Login from './Pages/Login/Login'
import Destinos from './Pages/Destinos/Destinos';
import CadastroDestino from './Pages/CadastroDestino/CadastroDestino';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> }></Route>
        <Route path="/destinos" element={ <Destinos/> }></Route>
        <Route path="/cadastrodestino" element={ <CadastroDestino/> }></Route>          
        
        <Route path="/promocao" element={ <Promocao/> }></Route>        
        <Route path="/contato" element={ <Contato/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>


      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


