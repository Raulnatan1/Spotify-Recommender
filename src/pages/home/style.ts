import styled, { keyframes } from "styled-components";
import { Heading1 } from "../../theme/typography/style";

const popAnimation = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    h1 {
        ${Heading1}
        animation: ${popAnimation} 1s ease-in-out;
    }
`;
