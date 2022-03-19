import '../Footer/Footer.css';
import LogoHorizontal from '../../assets/img/logo_DreamsViagens-horizontal.PNG'
function ColumnOne(){
    return(
        <div className=" col item">
            <div className="l-footer">
                    <img src={LogoHorizontal} width="340x" alt=""/>                
                    <p>
                        Uma empresa que nasceu para realizar sonhos das pessoas que desejam viajar com o melhor custo-benefício. 
                    <br/>Conforto e Segurança até nas alturas!
                    Porque para realizar sonhos só basta dar o primeiro passo. 
                    </p>
            </div>
        </div>
    );
}
export default ColumnOne;