import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--background);
`;

export const Content = styled.main`
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    padding: 1.5rem;

    a {
        text-decoration: none;
        color: #FFF;
        margin-left: 2.5rem;

    }
    .search-now {
        color: var(--pink);
    }
`;