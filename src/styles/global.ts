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
    .modal-profile-dev {
        width: 100%;
        max-width: 750px;
        padding: 3rem;
        border-radius: 10px;
        position: relative;
        background: #FFF;
        color: #000;

        display: flex;
        justify-content: center;
        flex-direction: column;

        font-family: 'Poppins', sans-serif;
        text-align: center;

        p {
            font-family: 'Manrope';
            font-weight: 700;
        }

        img {
            width: 400px;
            border-radius: 10px;
        }
    }
    .react-modal-overlay {
        background: rgba(0,0,0, 0.8);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`