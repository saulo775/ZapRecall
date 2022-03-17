import React from "react";

export function Welcome() {
    return (
        <section className="screenWelcome">
            <div className="logoInitial">
                <img src="./assets/logo.svg"/>
                <h1>Zap Recall</h1>
            </div>

            <button>Iniciar Recall!!!</button>
        </section>
    )
}