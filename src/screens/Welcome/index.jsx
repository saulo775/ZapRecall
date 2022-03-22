import React from "react";

import "./styles.css";
export function Welcome() {
    const [visible, setVisible] = React.useState(true);

    return (
        visible ? <section className="screen-welcome" >
            <div className="logo-initial">
                <img src="./assets/logo.svg" alt="logo"/>
                <h1>Zap Recall</h1>
            </div>

            <button onClick={()=>setVisible(false)}>Iniciar Recall!!!</button>
        </section> : <></>
    );
}