import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #000;
        --pink: #FF00E5;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: #FFF;
    }
    a {
        font-family: 'Manrope', sans-serif;
        font-size: 16pt;
        font-weight: 500;
    }
`