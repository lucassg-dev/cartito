import styled from "styled-components";
import { wWidth, wHeight } from "../../utils/Viewport";

export const StyledDisplayCategory = styled.section`
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    `

export const StyledCategoryHeader = styled.section`
    width: 100%;
    
    display: flex;
    justify-content: ${wHeight < wWidth ?'center' : 'start'};

    & > h2 {
        font-size: 2rem;
        color: brown;
    }
`