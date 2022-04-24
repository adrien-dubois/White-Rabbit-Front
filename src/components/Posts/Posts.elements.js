import styled from 'styled-components'

export const Div = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }

    .row{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 20px;
        align-items: stretch;

        .col-4{
            grid-column: span 4;
        }
    }
`;
