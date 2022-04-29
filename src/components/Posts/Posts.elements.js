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
        padding-right: 0;
        padding-left: 0;
    }
    

    .row{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 20px;
        align-items: stretch;

        .col-4{
            grid-column: span 4;
        }

        @media screen and (max-width: 1450px) {
            .col-4{
                grid-column: span 6;
            }
        }

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
    }

    .paginationBtn{
        width: 80%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 1rem;

        li{
            padding: 6px 15px;
            margin: 0 10px;
            transition: all .3s ease-in;
            
            &:hover{
                color: var(--white-color); 
                background-color: #F43B47;
            }
        }
    }

    .activeBtn{
        color: #F43B47;
        border: 2px solid #F43B47;
        font-weight: 600;
        cursor: pointer;
        border-radius: 50%;
    }

    .prevBtn, .nextBtn{
        cursor: pointer;
        border: 1px solid var(--white-color);
        border-radius: 4px;
    }
    
    .disableBtn{
        color: var(--grey-color);
        border: 1px solid var(--grey-color);
        pointer-events: none;
        border-radius: 4px;
        
        .prevBtn, .nextBtn{
            border: none;
        }


    }
`;
