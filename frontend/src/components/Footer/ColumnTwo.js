import '../Footer/Footer.css';
function ColumnTwo(){
    return(
        <div className="d-flex item">
                <div className="footerDiv2">
                    <div className="r-footer">

                        <h2>Redes Sociais</h2>
                        <div className="d-flex boxRedesSocias">
                            
                            <a className="social-icon" href="https://web.facebook.com/elianep2/" target="_blank"rel='noreferrer'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>

                            <a className="social-icon" href="https://www.instagram.com/elianespsilva/" target="_blank"rel='noreferrer'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a className="social-icon" href="https://www.linkedin.com/in/eliane-dos-santos-pereira-silva-4a772026/" target="_blank"rel='noreferrer'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                            
                            <a className="social-icon" href="https://github.com/eliane-sp-silva" target="_blank"rel='noreferrer'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default ColumnTwo;