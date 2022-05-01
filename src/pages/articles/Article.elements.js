import styled from 'styled-components'

export const Div = styled.div`
    background-image: var(--dark-welcome);
    background-color: var(--welcome-bg);
    min-height: 100vh;
    height: 100%;
    width: 100%;
    color: var (--white-color);
    font-family: var(--poppins-font);

    @media screen and (max-width: 1005px) {
        min-height: 100vh;
        height: 100%;
    }
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

        @media screen and (max-width: 1450px){
            .col-3{
                grid-column: span 4;
            }
        }

        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
            flex-direction: row-reverse;

            .col-3{
                order: 1;
                grid-column: span 8;
            }

            .col-8{
                order: 2;
                margin-bottom: 2rem;
            }
        }
    }
`;