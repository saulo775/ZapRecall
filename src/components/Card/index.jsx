import React from "react";
import "./styles.css";

export function Card({frente, verso, index}){
    let indexx = index;
    return (
        <div className="container-card">
            
            <div className="flashcard">
                <p>Pergunta {index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className="flashcard-question disable">
                <p>O que é JSX?</p>
                <img src="/assets/setinha.svg" alt="" />
            </div>

            <div className="flashcard-response disable">
                <p>
                    JSX é uma sintaxe para
                    escrever HTML dentro do JS
                </p>

                <div className="buttons">
                    <button>Não lembrei!</button>
                    <button>Quase não lembrei!</button>
                    <button>Zap!</button>
                </div>
            </div>
        </div>
    )
}