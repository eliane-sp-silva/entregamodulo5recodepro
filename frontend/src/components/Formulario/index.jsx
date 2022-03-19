import './index.css';
import api from '../../api';
import { useRef } from 'react';

const Formulario = () => {

    const nome = useRef()
    const foto = useRef()
    const preco = useRef()

    function enviarDados(event){        
        event.preventDefault()
        api.post('/produtos/', {
            nome: nome.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }).then(() => window.location.reload()).catch((err) => console.log(err))
    }

    return (
        <div className='card-form card' >
            <h1 className='waves-effect waves-light'>Cadastrar Destinos</h1>
            <div className="row container">
                <form className="col s12 " onSubmit={enviarDados}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={nome} />
                                <label>Nome do produto</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate"ref={foto} />
                                <label>Imagem</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="number" className="validate"ref={preco} step="0.01" />
                                <label>Preço</label>
                        </div>
                        <div className="col s12">
                            <button className="waves-effect waves-light btn" type="submit">Enviar</button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Formulario