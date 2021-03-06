import React from "react";
import { Card } from "../../components/Card";
import "./styles.css";

import data from "../../data";


export function Home() {
    console.log(data)
    return (
        <section className="container-home">
            <header>
                <img src="/assets/logo.svg" alt="logo" />
                <h1>Zap Recall</h1>
            </header>
            <section className="deck">
                {
                    data.map((question, index) => {
                        return(
                            <Card 
                                frente={question.frente}
                                verso={question.verso}
                                index={index}
                            />
                        ) 
                    })
                }
            </section>
            <footer>
                {/* <div className="visual-result">
                    <img src="/assets/sad.svg" alt="" />
                    <h2>Parabéns!</h2>
                </div> 
                <p>Você não esqueceu de nenhum flashcard!</p>
                */}
                <h3>0/{data.length} CONCLUÍDOS</h3>
                {/* <div className="icon-container">
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="help-circle"></ion-icon>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div> */}
            </footer>
        </section>
    )
}