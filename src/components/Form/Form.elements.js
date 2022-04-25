import styled from 'styled-components';

export const Div = styled.div`

    padding: 10px;
    border: 2px solid rgba(255, 255, 255, .3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

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
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: white;
            text-transform: uppercase;
            position: relative;
            width: 100%;
            text-align: center;
            text-shadow: 7px 8px 1px rgba(0, 0, 0, .2);
        }


        .area-field{
            max-width: 380px;
            width: 100%;
            height: 110px;
            margin: 10px 0;
            border-radius: 35px;
            border: 2px solid rgba(0, 0, 0, 0.3);
            display: grid;
            grid-template-columns: 15% 85%;
            padding: 0.4rem;
            transition: all .2s ease-in;

            &:hover{
                border: 2px solid rgba(255, 255, 255, .3);
            }

            &__icon{
                text-align: center;
                line-height: 40px;
                margin-top: 2px;
                svg{
                    color: var(--grey-color);
                    font-size: 1.1rem;
                }
            }

            &__textarea{
                background: none;
                outline: none;
                border: none;
                font-weight: 300;
                font-size: 1.1rem;
                color: var(--white-color);
                resize: none;
                font-family: var(--poppins-font);
            }

            &__label{
                position: absolute;
                left: 3.5rem;
                top: .6rem;
                cursor: text;
                padding: 0 0.3rem;
                transition: top 200ms ease-in,
                            left 200ms ease-in,
                            font-size 200ms ease-in;
            }

        }

        .area-field__textarea:focus ~ .area-field__label,
        .area-field__textarea:not(:placeholder-shown)~.area-field__label{
            top: -0.6rem;
            font-size: .8rem;
            left: 1.2rem;
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
            transition: all .2s ease-in;

            &:hover{
                border: 2px solid rgba(255, 255, 255, .3);
            }

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

            &__small{
                text-align: center;
                width: 380px;
                margin: 5px 0;
                font-size: .75rem;
                font-weight: 300;
                font-style: italic;
            }
        }

        .input-field__text:focus ~ .input-field__label,
        .input-field__text:not(:placeholder-shown)~.input-field__label{
            top: -0.6rem;
            font-size: .8rem;
            left: 1.2rem;
        }

        .input-buttons{

            display: flex;
            align-items: center;
            flex-direction: column;

            &__btn{
                width: 150px;
                height: 49px;
                border: none;
                outline: none;
                border-radius: 4px;
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

            &__btn-clear{
                width: 150px;
                height: 33px;
                border: none;
                outline: none;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
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
        .input-file {
            /* margin-left: 8.5rem; */
            margin: 0 auto;

            input[type=file]{
                 width: 160px;
                 margin-left: 5px;
                 text-align: center;
             }

             input[type=file] + label{
                 color: blue;
             }
        }


        .input-file input[type="file" i]::-webkit-file-upload-button{
            width: 140px;
            height: 49px;
            outline: none;
            border: 2px solid rgba(0, 0, 0, .3);
            cursor: pointer;
            border-radius: 8px;
            color: var(--white-color);
            text-transform: uppercase;
            font-weight: 600;
            font-size: .72rem;
            margin: 10px 5px;
            background: var(--input-color);
            transition: all .3s ease-in-out ;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &:hover{
                background: #444166;
                border: 2px solid rgba(0, 0, 0, .6);
            }
        }

    }
`;