import LoginGif from '../../assets/gif/50124-user-profile.gif';
import './Login.css';

function LoginLottie(){    
    
    return(
        <div className='d-block mt-4 col-sm-4'>
        <h1>Faça aqui o seu login!</h1>
        <img className="gif" src={ LoginGif } alt="LoginGif" />
        <div></div>
      </div>
    );
}
export default LoginLottie;