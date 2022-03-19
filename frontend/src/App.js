import { lazy, Suspense } from "react";

const Destinos = lazy(() => import('./Pages/Destinos'))
const CadastroDestino = lazy(() => import('./Pages/CadastroDestino'))
const Contato = lazy(() => import('./Pages/Contato'))
const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Promocao = lazy(() => import('./Pages/Promocao'))


function App (){
    return(
        <div className="App" >
            <Suspense fallback={<p>Carregando...</p>}>
                <Destinos />
                <CadastroDestino />
                <Contato />
                <Home />
                <Login />
                <Promocao />
            </Suspense>
        </div>
    );
}
export default App;