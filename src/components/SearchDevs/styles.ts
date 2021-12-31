import styled from 'styled-components';

export const Container = styled.main`
    margin-top: 5rem;
    display: flex;
    justify-content: center;


    div {
        display: flex;
    }

    input {
        height: 4rem;
        width: 28rem;
        border: none;
        border-radius: 100px;
        text-align: center;
        font-size: 18pt;
    }
    button {
        height: 4rem;
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
`;

