import '../../App.css';
import '../CadastroDestino/index.css'
import CardsCadastro from '../../components/CardsCadastro';
import Formulario from '../../components/Formulario';

function CadastroDestino() {
  return (
    <div className="App">
      
      <Formulario />
      <CardsCadastro />
    </div>
  );
}

export default CadastroDestino;
