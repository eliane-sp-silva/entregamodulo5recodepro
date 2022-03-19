import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import IlhasMaldivas from '../../assets/img/pexels-asad-photo-maldives-1287460.jpg'

function Header(){
  return(
    <header className="img-header" style={{background: `url(${IlhasMaldivas})no-repeat center`}}>          
    <Navbar></Navbar>
    </header>
  );   
  
}
export default Header;