import ContatoGif from '../../assets/gif/80753-alot-of-things-going-in-the-head.gif';


function ContatoLottie(){    
    
    return(
        <div className='mt-4 col-sm-4'>
        <h1>Agradecemos o seu contato!</h1>
        <img className="gif" src={ ContatoGif } alt="ContatoGif" />
        <div></div>
      </div>
    );
}
export default ContatoLottie;