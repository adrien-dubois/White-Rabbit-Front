import styled from 'styled-components';

export const Div = styled.div`
    .card-post{
        width: 100%;
        height: 100%;
        min-height: 400px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;

        &__img{
            width: 100%;
            height: 30%;
            border-radius: 6px 6px 0 0;
            
            img{
                object-fit: cover;
                object-position: center center;
                width: 100%;
                height: auto;
                max-height: 150px;
                border-radius: 6px 6px 0 0;
            }
        }

        &__overlay{
            font-family: var(--roboto-font);

            h6{
                position: absolute;
                top: 3%;
                left: 4%;
                font-size: 1.1rem;
                font-weight: 500;
                text-shadow: 4px 3px 2px rgba(255, 255, 255, .3);
            }
            p{
                position: absolute;
                top: 10%;
                left: 4%;
                font-size: .8rem;
                text-shadow: 1px 1px 1px rgba(0, 0, 0, .6);
            }
        }

        &__overlay2{
            .more{
                background: transparent;
                cursor: pointer;
                position: absolute;
                width: 24px;
                height: 20px;
                top: 3%;
                right: 4%;
                font-size: 1.2rem;
                border-radius: 6px;
                padding: 0 2px;
                transition: all .3s ease-in;

                svg{
                    color: var(--color-white);
                }

                .tooltip{
                    display: none;
                    color: var(--white-color);
                    font-size: .9rem;
                    text-align: center;
                    padding: 1px 2px;
                    border-radius: 5px;
                    position: absolute;
                    width: 100px;
                    max-width: 300px;
                    padding: 4px 4px;
                    word-wrap: nowrap;
                    border: 1px solid var(--input-color);
                    background: rgb(39, 51, 89, 0.4);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    word-wrap: break-word;
                    bottom: 112%;
                    margin-left: -71%;

                    &::before{
                        position: absolute;
                        content: '';
                        height: 0;
                        width: 0;
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        border-bottom: 8px solid var(--input-color);
                        transform: rotate(180deg);
                        bottom: -8px;
                    }
                }

                &:hover{
                    background: rgba(255,255,255,.2);
                    .tooltip{
                        display: block;
                    }
                }
            }
        }

        &__details{
            margin-left: .6rem;
            height: 100%;
            position: relative;
            .tags{
                color: var(--grey-color);
                font-size: .7rem;
            }
            .title{
                font-size: 1.3rem;
                font-weight: 500;
                font-family: var(--ubuntu-font);
                letter-spacing: 1px;
                margin: 1rem 0;
            }
            .message{
                font-size: 1.1rem;
                font-weight: 300;
                font-family: var(--josefin-font);
                font-style: italic;
            }
        }

        &__actions{
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            button{
                background: 0 0;
                color: var(--white-color);
                cursor: pointer;
                font-size: .8rem;
                font-weight: 300;
                margin: .6rem; 
            }
        }
    }
`;