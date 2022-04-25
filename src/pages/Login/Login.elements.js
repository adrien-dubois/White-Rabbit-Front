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
            top: 25%;
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
                    top: -3rem;
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
        }
    }
`;