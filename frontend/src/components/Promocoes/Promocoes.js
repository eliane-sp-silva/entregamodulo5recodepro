import Bangkok from '../../assets/img/bangkok-8757031849_16d90c182b_b.jpg';
import IlhasMaldivas from '../../assets/img/ilhasMaldivas-grande-widht4320.jfif';
import BonitoMs from '../../assets/img/Abismo_anhumas-_bonito-ms.jpg';
import Gramados from '../../assets/img/Gramado-RS_2012_Nokia_N8_-_panoramio.jpg';
import '../Promocoes/Promocoes.css';

function Promocoes(){
    return(
    <main className="mainPromocao">
    <h1 id="mainH1">Promoções da Semana</h1>
        
        
    <div className="promocao-section">
        <div className="destino">
            <img src={Bangkok} alt="" className="destino-pic"/>
            <div className="destino-info">
                <h2>Bangkok</h2>
                <p>capital da Tailândia</p>
                <div className="btncompra">
                    <a href="./compra.html">Comprar</a>

                </div>
            </div>
        </div>

        <div className="destino">
            <img src={ IlhasMaldivas} alt="" className="destino-pic"/>
            <div className="destino-info">
                <h2>Ilhas Maldivas</h2>
                <p>nação tropical no Oceano Índico</p>
                <div className="btncompra">
                    <a href="./compra.html">Comprar</a>

                </div>
            </div>
        </div>

        <div className="destino">
            <img src={Gramados} alt="" className="destino-pic"/>
            <div className="destino-info">
                <h2>Gramado</h2>
                <p>Rio Grande do Sul</p>
                <div className="btncompra">
                    
                    <a href="./compra.html">Comprar</a>
                </div>
            </div>
        </div>

        <div className="destino">
            <img src={BonitoMs} alt="" className="destino-pic"/>
            <div className="destino-info">
                <h2>Bonito</h2>
                <p>Mato Grosso do Sul</p>
                <div className="btncompra">
                    
                    <a href="./compra.html">Comprar</a>

                </div>
            </div>
        </div>
    </div>


    </main>

);
}
export default Promocoes;