import FormLogin from './FormLogin';
import LoginLottie from './LoginLottie';

function Login(){
    return(
        <div className="d-flex justify-content-center">            
            <LoginLottie></LoginLottie>
            <FormLogin></FormLogin>
        </div>
    );
}
export default Login;