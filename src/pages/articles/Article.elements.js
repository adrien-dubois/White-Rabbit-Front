import styled from 'styled-components'

export const Div = styled.div`
    background-image: var(--dark-welcome);
    background-color: var(--welcome-bg);
    height: 100vh;
    width: 100%;
    color: var (--white-color);
    font-family: var(--poppins-font);
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    .row{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 20px;

        .col-8{
            grid-column: span 8;
        }

        .col-3{
            grid-column: span 3;
        }
    }
`;