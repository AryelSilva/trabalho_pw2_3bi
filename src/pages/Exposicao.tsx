import React from "react";
import "./Produtos/exposicao.css";
import img from "./Produtos/img/annabelle.png";
import img_2 from "./Produtos/img/loki.png";
import img_3 from "./Produtos/img/jessie.png";
import img_4 from "./Produtos/img/coraline.png";
import img_5 from "./Produtos/img/lucifer.png";
import img_6 from "./Produtos/img/miranha.png";
import img_7 from "./Produtos/img/wanda.png";
import img_14 from "./Produtos/img/juliette.png";
import img_8 from "./Produtos/img/max.png";
import img_9 from "./Produtos/img/aurora.png";
import img_10 from "./Produtos/img/jason.png";
import img_11 from "./Produtos/img/orfa.png";
import img_12 from "./Produtos/img/geralda.png";
import img_13 from "./Produtos/img/malevola.png";
import img_15 from "./Produtos/img/jon.png";
import img_16 from "./Produtos/img/professor.png";
import img_17 from "./Produtos/img/alicia.png";
import img_18 from "./Produtos/img/woody2.png";
import img_19 from "./Produtos/img/harry.png";
import img_20 from "./Produtos/img/estranho.png";


export const Exposicao = () => {
    return (
        <>

            <div className="exposicao-page">
                <div className="exposiçao">
                    <h1>Exposição de Arte</h1>
                </div>
                <div className="batata">
                    <img className="annabelle" src={img} /> <img className="loki" src={img_2} /> <img className="jessie" src={img_3} /> <img className="coraline" src={img_4} />

                    <div />

                    <div className="batata2">
                    <img className="lucifer" src={img_5} /> <img className="miranha" src={img_6} /> <img className="wanda" src={img_7} /> <img className="juliette" src={img_14} />
                    </div>

                    <div className="batata3">
                    <img className="max" src={img_8} /> <img className="aurora" src={img_9} /> <img className="jason" src={img_10} /> <img className="orfa" src={img_11} /> 
                    </div>

                    <div className="batata4">
                    <img className="geralda" src={img_12} /> <img className="malevola" src={img_13} /> <img className="professor" src={img_16} /> <img className="jon" src={img_15} />
                    </div>

                    <div className="batata5">
                      <img className="alicia" src={img_17} /> <img className="woody2" src={img_18} /> <img className="harry" src={img_19} /> <img className="estranho   " src={img_20} />
                    </div>

                </div>
            </div>

        </>
    );
}