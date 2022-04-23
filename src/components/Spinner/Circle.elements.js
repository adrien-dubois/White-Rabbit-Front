import styled from 'styled-components'
import { keyframes } from 'styled-components';

const ring = keyframes`
0%{
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #f43b47;
}
50%{
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px #aaf845;
}
100%{
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #453a94;
}
`;

const text = keyframes`
50%{color: #181B2B;}
`;

export const Div = styled.div`
    .center{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        position: relative;

        .ring{
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            animation: ${ring} 2s linear infinite;

            &:before{
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                box-shadow: 0 0 5px rgba(255,255, 255, .3);
                border-radius: 50%;
            }
        }
        span{
            color: #737373;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 200px;
            animation: ${text} 3s ease-in-out infinite;
        }
    }
`;