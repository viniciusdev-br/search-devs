import styled from 'styled-components';

export const Container = styled.main`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background: radial-gradient(circle, rgba(112,0,255,1) 11%, rgba(0,0,0,1) 33%);
    transition: 200ms;
    div {
        display: flex;
    }

    input {
        height: 3.5rem;
        width: 26rem;
        border: none;
        border-radius: 100px;
        text-align: center;
        font-size: 18pt;
    }
    button {
        height: 3.5rem;
        width: 6.3rem;
        background-color: var(--pink);
        margin-left: 1.3rem;
        border: none;
        border-radius: 100px;
        transition: 200ms;
        cursor: pointer;
        &:hover {
            width: 7rem;
            filter: brightness(110%);
        }
    }
    .card-dev {
        flex-direction: column;
        margin-top: 5rem;
        text-align: center;
        font-size: 14pt;
        img {
            width: 22rem;
            border-radius: 20px;
            transition: 200ms;
            cursor: pointer;
        }

        img:hover {
            width: 23rem;
        }
    }

    .card-dev-transparent {
        display: none;
    }
    
`;

