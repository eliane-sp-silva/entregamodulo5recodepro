import './index.css';
import api from '../../api';
import { useState, useEffect, } from 'react';

const CardsCadastro = () => {
    
    const [produto, setProduto] = useState([])

    // const btn = useRef()

    useEffect(() => {
        api.get('/produtos').then((res) => {
            setProduto(res.data)
        })
            .catch((err) => console.log(err))
    }, [])

    function deletar(id){
        api.delete(`/produtos/${id}`)
        .then(()=>api.get("/produtos").then((res)=>setProduto(res.data))
        .catch((err)=>console.log(err))).catch((err)=>console.log(err))
    }

    return (
        <div>
            <div className="row">
                <div className="col divCard">
                    {produto.map((produto) => (
                        <div className="card" key={produto.id}>
                            <div className="card-image">
                                <img src={produto.foto} />
                                <span className="card-title">{produto.nome}</span>
                                <button className="btn-floating halfway-fab waves-effect waves-light red large
                                 material-icons"
                                 onClick={()=> deletar(produto.id)}> 
                                    delete</button>
                            </div>
                            <div className="card-content">
                                <h5>R$ {produto.preco}</h5>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default CardsCadastro