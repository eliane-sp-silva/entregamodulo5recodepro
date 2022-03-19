import '../FormContato/Contato.css'
function formContato(){
    return(
        <main className="container mb-4 mt-4 col-sm-4 card card-body mainContato">
            <form className=" mb-4 mt-4  card-body">
            <h2 className="text-muted">Formulário de Contato</h2>   
            <div className="form-group">
            <label for="exampleFormControlInput1">Nome</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" 
            placeholder="Digite seu Nome aqui."/>
            </div>
            <div className="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            placeholder="Digite seu email aqui."/>
            </div>
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Mensagem:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">Enviar</button>
        </form>
            
        </main>
    );
}

export default formContato;