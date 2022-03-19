import '../../components/Destinos/Destinos.css'
import Roma from '../../assets/img/rome.jpg'
import GrandCanyon from '../../assets/img/grand-canyon.jpg';
import IlhasMaldivas from '../../assets/img/maldives.jpg';
import Bangkok from '../../assets/img/bangkok-4505350_1280.jpg';
import Buzios from '../../assets/img/buzios.jpg';
import Gramado from '../../assets/img/gramado.jpg';
import LencoisMaranhenses from '../../assets/img/lencoisMaranhenses.jpg';
import Conde from '../../assets/img/condePB.jpg';
import Bonito from '../../assets/img/bonitoMS.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cards(){
    return(
        <main className="mainDestino mainPromocao"> 
        <Button><Link to={"/cadastrodestino"}>Cadastrar Novo Destino</Link></Button>          
        <h1 id="mainH1">Melhores Destinos</h1>
        
        <section className="section1">
            <div className="grid">
            <div className="grid-item">
                <div className="card">
                <img className="card-img" src={ Roma} alt="Roma" />
                <div className="card-content">
                    <h1 className="card-header">Roma</h1>
                    <p className="card-text">
                        Roma é conhecida por sua impressionante <strong> arquitetura </strong>, com o Coliseu, o Panteão e a Fontana di Trevi como as principais atrações.
                    </p>               
                    <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                </div>
                </div>
                
            </div>
            <div className="grid-item">
                <div className="card">
                <img
                    className="card-img"
                    src={ GrandCanyon}
                    alt="Grand Canyon"
                />
                <div className="card-content">
                    <h1 className="card-header">Grand Canyon</h1>
                    <p className="card-text">
                        Uma das maravilhas naturais do mundo, o icônico Grand Canyon atrai
                        visitantes empoleirados na borda de seu
                        <strong> penhascos elevados </strong>.
                    </p>
                    <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="card">
                <img className="card-img" src={ IlhasMaldivas} alt="Ilhas Maldivas" />
                <div className="card-content">
                    <h1 className="card-header">Ilhas Maldivas</h1>
                    <p className="card-text">
                        As Ilhas Maldivas são conhecidas por seus
                        <strong> ambiente natural </strong> incluindo o oceano azul,
                        praias de areia branca e ar puro, atraindo turistas.
                    </p>
                    <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                </div>
                </div>
            </div>
            </div>
            </section>
            <section className="section1">
                <div className="grid">
                <div className="grid-item">
                    <div className="card">
                    <img className="card-img" src={Bangkok} alt="Bangkok" />
                    <div className="card-content">
                        <h1 className="card-header">Bangkok</h1>
                        <p className="card-text">
                            A capital da <strong> Tailândia </strong>, é uma grande cidade conhecida pelos santuários ornamentados e pela animada vida urbana.  </p>
                        <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                    </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                    <img
                        className="card-img"
                        src={ Buzios}
                        alt="Buzios"
                    />
                    <div className="card-content">
                        <h1 className="card-header">Búzios</h1>
                        <p className="card-text">
                            Península oceânica que desaguam no Rio de Janeiro. Sofisticado destino de férias com inúmeras praias e local de <strong> surf </strong> popular.
                        </p>
                        <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                    </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                    <img className="card-img" src={Gramado} alt="Gramado" />
                    <div className="card-content">
                        <h1 className="card-header">Gramado</h1>
                        <p className="card-text">
                            Situada no Rio Grande do Sul, Brasil. Gramado é conhecida pelas suas exibições de luzes de <strong>Natal </strong> e pelas hortênsias em flor na <strong> primavera </strong>. 
                        </p>
                        <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                    </div>
                    </div>
                </div>
                </div>
                </section>
                <section className="section1">
                    <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                        <img className="card-img" src={LencoisMaranhenses} alt="LencoisMaranhenses" />
                        <div className="card-content">
                            <h1 className="card-header">Lençóis Maranhenses</h1>
                            <p className="card-text">
                                No norte do Brasil (Maranhão). É conhecido pela sua vasta paisagem desértica de grandes<strong> dunas </strong> de areia branca e pelas lagoas sazonais de água da chuva. 
                            </p>
                            <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                        </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                        <img
                            className="card-img"
                            src={ Conde}
                            alt="Conde"
                        />
                        <div className="card-content">
                            <h1 className="card-header">Conde</h1>
                            <p className="card-text">
                                Fica localizado no litoral sul do Estado da Paraíba, Brasil. De clima tropical chuvoso com lindas <strong> praias </strong> incríveis como Praia do Coqueirinho, Praia de Tambaba e Praia de Tabatinga.
                            </p>
                            <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                        </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                        <img className="card-img" src={ Bonito} alt="Bonito" />
                        <div className="card-content">
                            <h1 className="card-header">Bonito</h1>
                            <p className="card-text">
                                Uma cidade e centro de <strong> ecoturismo </strong> no estado brasileiro de Mato Grosso do Sul. O Abismo Anhumas é uma enorme <strong>caverna</strong> permite a prática de rapel e de mergulho num lago subterrâneo. 
                            </p>
                            <a className="card-btn" href="./compra.html" type="button">Comprar<span>&rarr;</span></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </section>
        </main>
);
}
export default Cards;