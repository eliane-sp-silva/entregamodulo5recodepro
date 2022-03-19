import FormContato from "./FormContato";
import ContatoLottie from '../ContatoLottie/ContatoLottie';
import './Contato.css'
import '../FormContato/Contato.css';
function Contatos(){
    return(
       <div className="d-flex justify-content-center align-items-center">
       <FormContato></FormContato>
        <ContatoLottie></ContatoLottie> 
       </div>
               
       
     
);
}
export default Contatos;