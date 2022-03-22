
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #FB6B6B;

        --red-details: #D70900;
        --yellow: #FFFFD5;
        --shape: #FFFFFF;
        --wrong-answer: #FF3030;
        --reasonable-answer: #FF922E;
        --correct-answer: #2FBE34;

        --text-white: #FFFFFF;
        --text-black: #333333;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body, button {
        -webkit-font-smooth: antialiased;
        font-family: 'Recursive', sans-serif;
    }

    h1{
        font-family: 'Righteous', cursive;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    ion-icon[name="close-circle"]{
    color: var(--wrong-answer);
}

    ion-icon[name="help-circle"]{
        color: var(--reasonable-answer);
    }

    ion-icon[name="checkmark-circle"]{
        color: var(--correct-answer);
    }
`;