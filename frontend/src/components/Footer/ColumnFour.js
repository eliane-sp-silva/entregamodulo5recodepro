import '../Footer/Footer.css';

function ColumnFour(){
    return(
        <div className="item">
                <div className="footerDiv4">
                    <h2>Endereço</h2>
                    <div className="box">
                        <p><ion-icon className="iconAdd" name="location-outline"></ion-icon>
                            Rua Viajar Faz Bem, 1010
                            São Paulo, SP
                            Brasil
                            </p>
                        <p><ion-icon className="iconAdd" name="logo-whatsapp"></ion-icon>
                            +55 11 99999-9999
                        </p>
                        <p><ion-icon className="iconAdd" name="call-outline"></ion-icon>
                            +55 11 3333-3333</p>
                        <p>
                            <ion-icon className="iconAdd" name="mail-outline"></ion-icon>
                            contato@dreamsviagens.com</p>
                    </div>
                </div>
            </div>
    );
}
export default ColumnFour;