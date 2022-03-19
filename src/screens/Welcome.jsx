import React from "react";

export function Welcome() {
    return (
        <section className="screen-welcome">
            <div className="logo-initial">
                <img src="./assets/logo.svg"/>
                <h1>Zap Recall</h1>
            </div>

            <button>Iniciar Recall!!!</button>
        </section>
    )
}