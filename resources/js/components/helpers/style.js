import styled, { css } from "styled-components";

export const UnderlineTitle = styled.div`
    width: 100%;
    
    h2 {
        font-size: clamp(26px, 3vw, 50px);
        
        span {
            position: relative;

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 18px;
                background-color: ${({ theme }) => theme.secundary};
                bottom: 5px;
                z-index: -1;
            }
        }
    }
`;