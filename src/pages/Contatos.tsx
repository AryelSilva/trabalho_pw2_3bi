import React from 'react';
import "./Contatos/contato.css";
import eu from "./Contatos/img/eu.mp4"
export const Contatos = () => {
    return (
        <div className="body">

            <div className="main-login">
                <div className="left-login">
                     <h1>Entre em contato conosco{/*<br></br> Aryel Arts*/}</h1>
                     <form className='eu'>
                     <input type="text" id="login" name="usuario"  placeholder="Email" required></input> <br /> <br />
                     <input type="password" id="senha" name="senha"  placeholder="Senha" required></input> <br /> <br />
                     <input type="text" name="texto" placeholder='Digite sua mensagem aqui'></input> <br /> <br /> <br />
                     <button type="submit" className='btn-login' id="cadastro">Enviar</button> 
                        </form> 
                </div>
                <div className="card-login">
                    <div className="textfield">
                        <video src={eu} width="470" height="644" autoPlay loop muted> </video>
                        
                    
                    </div>
                    <div className="textfield">
                        {/* <label for="senha">Senha</label> */}
                        {/* <input type="password" id="senha"  placeholder="Senha" required> */}
                    </div>
                    {/* <button className="btn-login" value="enviar" id="logar" >Login</button> */}
                    {/* <p className="criar">Não tem uma conta? <a href="cadastro.html" className="cadastre-se">Cadastre-se aqui</a></p> */}
                </div>
            </div>



        </div>
    );
}
