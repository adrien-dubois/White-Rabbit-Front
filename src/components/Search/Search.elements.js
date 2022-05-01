import styled from 'styled-components'

export const Div = styled.div`
    padding: 10px;
    border: 2px solid rgba(255, 255, 255, .3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin-bottom: 2rem;

    .search-form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        position: relative;

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
        }

        &__title{
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: var(--white-color);
            text-transform: uppercase;
            position: relative;
            width: 100%;
            text-align: center;
            text-shadow: 7px 8px 1px rgba(0, 0, 0, .2);
        }

        &__field{
            max-width: 380px;
            width: 100%;
            height: 55px;
            margin: 10px 0;
            border-radius: 35px;
            border: 2px solid rgba(0, 0, 0, .3);
            display: grid;
            grid-template-columns: 15% 85%;
            padding: .4rem;
            transition: all .2s ease-in;

            &:hover{
                border: 2px solid rgba(255, 2555, 255, .3);
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
            &__input{
                background: none;
                outline: none;
                border: none;
                line-height: 1;
                font-weight: 600;
                font-size: 1.1rem;
                color: var(--white-color);
            }

        }
        &__chip{
            max-width: 380px;
            width: 100%;
            height: 55px;
            margin: 10px 0;
            border-radius: 35px;
            border: 2px solid rgba(0, 0, 0, .3);
            display: grid;
            grid-template-columns: 15% 85%;
            padding: .4rem;
            transition: all .2s ease-in;

            &__icon{
                text-align: center;
                line-height: 40px;
                margin-top: 2px;
                svg{
                    color: var(--grey-color);
                    font-size: 1.1rem;
                }
            }

            &__input{
                background: none;
                outline: none;
                border: none;
                line-height: 1;
                font-weight: 600;
                font-size: 1.1rem;
                color: var(--white-color);
            }

            &:hover{
                border: 2px solid rgba(255, 2555, 255, .3);
            }

            .MuiInputBase-input-45,
            .WAMuiChipInput-inputRoot-53{
                color: var(--white-color);

            }

            .WAMuiChipInput-underline-14{
                border: none;
                &::before{
                    border: none;
                }
                &::after{
                    border: none;
                }
                &:hover{
                    border: none;
                }
            }
            .WAMuiChipInput-underline-14:hover:not(.WAMuiChipInput-disabled-13):not(.WAMuiChipInput-focused-12):not(.WAMuiChipInput-error-15):before{
                border-bottom: none;
            }
        }
    }
`;