import styled from 'styled-components'

export const Div = styled.div`
    max-width: 380px;
    width: 100%;
    height: 55px;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    padding: 0 .4rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .icon{
        text-align: center;
        line-height: 55px;

        svg{
            color: var(--grey-color);
            font-size: 1.1rem;
        }
    }

    .show{
        text-align: center;
        margin-top: 1rem;
        align-items: center;
        transition: all .4s ease-in;
        cursor: pointer;
        svg{
            color: var(--grey-color);
            font-size: 1.4rem;
        }
    }

    input{
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--white-color);
    }

    input::placholder{
        font-weight: 500;
        color: var(--grey-color);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: white !important;
    }
`;