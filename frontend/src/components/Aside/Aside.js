import '../Aside/Aside.css';
import chamadaHome from '../../assets/img/pexels-te-lensfix-1371360.jpg';
 


function Aside(){
    return(
        <section className="chamadaHome">
                        
            <div className="chamadaHomeCard" >
                <div>
                    <img src={chamadaHome} width="400" alt=""/>
                </div>
                <div className="chamadaHometxt" >
                    <i>Dizem por aí...</i><br/>
                    <br/><del>Viajar é só pra quem tem dinheiro!</del> <br/>
                    <br/><mark>Viajar é questão de planejamento!</mark>
                    <p>Aqui na Dreams Viagens, você paga e viaja sem preocupações!</p>
                    <p className="valor"><br/><b>Todos merecem um momento para relaxar e curtir a vida!</b><br/></p>
                    <small> Suaves Prestaçoes Antecipadas, que não pesam no seu bolso!</small>
                </div>
            </div>
            
        </section>
    );
}
export default Aside;