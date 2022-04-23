import styled from 'styled-components';

export const Div = styled.div`
    .card-post{
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;

        &__img{
            width: 100%;
            height: 30%;
            border-radius: 15px 15px 0 0;
            object-fit: cover;
        }

        &__overlay{
            h6{
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
`;