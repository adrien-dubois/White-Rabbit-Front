import styled from 'styled-components'

export const Div = styled.div`
    background-image: var(--dark-welcome);
    background-color: var(--welcome-bg);
    min-height: 100vh;
    width: 100%;
    color: var(--white-color);
    font-family: var(--poppins-font);
    position: relative;
    overflow: hidden;

    &:before{
        content: '';
        position: absolute;
        width: 2000px;
        height: 2000px;
        border-radius: 50%;
        background: rgb(39, 51, 89, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        top: -10%;
        right: 48%;
        transform: translateY(-50%);
    }

    .forms-container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        .signin-signup{
            position: absolute;
            top: 20%;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            justify-content: space-between;
            text-align: center;
            align-items: flex-start;

            .image{
                img{
                    position: absolute;
                    left: 4%;
                    top: -1rem;
                }
            }

            form{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 5rem;
                overflow: hidden;

                .title{
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    background-color: #fff;
                    background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                }

                .danger{
                    color: var(--error-color);
                    font-weight: 600;
                    text-transform: uppercase;
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
                    margin: 15px 0;
                    background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
                    background-size: 200% auto;
                    box-shadow: 0 0 10px #eee;
                    transition: all .3s ease-out ;

                    &:hover{
                        background-position: right center;
                    }
                }
            }

            /* SWITCH PART */
            .switch-form{
                position: relative;
                z-index: 2;
                .switch{
                    cursor: pointer;
                    appearance: none;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    width: 4rem;
                    height: 1.5rem;
                    border-radius: 1.5rem;
                    vertical-align: middle;
                    transition: all 0.3s ease-in-out;
                }

                .switch + label{
                    margin-left: -0.8rem;
                }

                input:checked.switch{
                    background: #a8a8a853;
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }

                .switch + label::before{
                    display: inline-block;
                    content: '';
                    background-color: white;
                    height: 1.2rem;
                    width: 1.2rem;
                    border-radius: 50%;
                    vertical-align: middle;
                    position: relative;
                    left: -3rem;
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }

                input:checked.switch + label::before{
                    position: relative;
                    left: -0.5rem;
                    transition: all 0.3s ease-in-out;
                }
            }

            .google-btn{
                margin: 0 auto;
                margin-top: 1rem;
                padding: 10px 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #4285F4;
                color: var(--white-color);
                cursor: pointer;

                svg{
                    height: 1.5em;
                    width: 1.5em;
                    margin-right: .5rem;
                    background-color: #fff;
                }
            }
        }
    }
`;