import styled from 'styled-components';

export const Div = styled.div`

    .form-tip{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        position: relative;

        .danger{
            color: var(--error-color);
            font-weight: 600;
            text-transform: uppercase;
        }

        .form-title{
            font-size: 1.2rem;
            margin-bottom: 10px;
            background-color: #var(--white-color);
            background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .input-field{
            max-width: 380px;
            width: 100%;
            height: 55px;
            margin: 10px 0;
            border-radius: 55px;
            border: 2px solid rgba(0, 0, 0, 0.3);
            display: grid;
            grid-template-columns: 15% 85%;
            padding: 0.4rem;

            &__icon{
                text-align: center;
                line-height: 40px;
                margin-top: 2px;
                svg{
                    color: var(--grey-color);
                    font-size: 1.1rem;
                }
            }

            &__text{
                
                background: none;
                outline: none;
                border: none;
                line-height: 1;
                font-weight: 600;
                font-size: 1.1rem;
                color: var(--white-color);

            }

            &__label{
                position: absolute;
                left: 3.5rem;
                top: .8rem;
                cursor: text;
                padding: 0 0.3rem;
                transition: top 200ms ease-in,
                            left 200ms ease-in,
                            font-size 200ms ease-in;
            }
        }

        .input-field__text:focus ~ .input-field__label,
        .input-field__text:not(:placeholder-shown)~.input-field__label{
            top: -0.6rem;
            font-size: .8rem;
            left: 1.2rem;
        }

        .btn{
            width: 150px;
            height: 49px;
            border: none;
            outline: none;
            border-radius: 49px;
            cursor: pointer;
            color: var(--white-color);
            text-transform: uppercase;
            font-weight: 600;
            margin: 10px 0;
            background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
            background-size: 200% auto;
            box-shadow: 0 0 10px #eee;
            transition: all .3s ease-out ;

            &:hover{
                background-position: right center;
            }
        }

    }
`;