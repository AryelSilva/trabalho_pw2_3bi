import React from "react";
import "./Home/home.css";
import desenhos from "./Home/img/desenhos.mp4"
export const Home = () => {
    return (
        <div className="body">

            <div className="main-login">
                <div className="left-login">
                    <h1>Seja Bem-Vindo ao mundo de<br></br> Aryel Arts</h1>
                </div>
                <div className="card-login">
                    <div className="textfield">
                        <video src={desenhos} width="470" height="644" autoPlay loop muted> </video>
                        
                    
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
