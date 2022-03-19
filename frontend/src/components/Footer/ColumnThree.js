import '../Footer/Footer.css';
import { Link } from "react-router-dom";

function ColumnThree(){
    return(
        <div className="item ">    

            <h2>Links</h2>
            <div className="box h-box">
            <Link to="/" className="text-decoration-none ">Home</Link>            
            <Link to="/destinos" className="text-decoration-none">Destinos</Link>
            <Link to="/promocao"className="text-decoration-none">Promoções</Link>
            <Link to="/contato"className="text-decoration-none">Contato</Link>
            <Link to="/login"className="text-decoration-none">Login</Link>         

        </div>
    </div>
    );
}
export default ColumnThree;