import React from "react";
import '../Navbar/Navbar.css';
import LogoRedondo from  '../../assets/img/logo_DreamsViagens.PNG';
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="">
            <div className="divLogo"><img src={LogoRedondo} width="90px"
                    alt="logo - avião dando volta ao mundo e Dreams Viagens"/></div>
            
            <div className="d-flex justify-content-end text-decoration-none divLinks">   
            <li><Link to="/" className="text-decoration-none ">Home</Link></li>            
            <li><Link to="/destinos" className="text-decoration-none">Destinos</Link></li>
            <li><Link to="/promocao"className="text-decoration-none">Promoções</Link></li>
            <li><Link to="/contato"className="text-decoration-none">Contato</Link></li>
            <li><Link to="/login"className="text-decoration-none">Login</Link></li>           
              
            </div>
         

        </nav>

    )

    
}
export default Navbar;