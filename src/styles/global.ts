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
        max-width: 1250px;
        padding: 3rem;
        border-radius: 10px;
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
            width: 370px;
            border-radius: 10px;
        }
        .container-table {
            margin-top: 1rem;
            width: 100%;
            height: 300px;
            overflow: auto;
        }
        table {
            margin-top: 2rem;
            width: 100%;
            border-spacing: 0rem 0.5rem;
            text-align: center;

            tbody {
                font-family: 'Manrope'
            }

            td {
                max-width: 2rem;
                background: #ffd9fb;
                border-radius: 0.20rem;

                a {
                    text-decoration: none;
                    font-family: 'Manrope';
                    font-size: 14pt;
                }
            }
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