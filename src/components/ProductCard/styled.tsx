import styled from "styled-components";
import { wWidth, wHeight } from "../../utils/Viewport";


export const StyledProductCard = styled.div`
    background-color: brown;
    border-radius: 8px;
    text-align: center;
    width: ${wWidth > wHeight ? "15vw" : "42vw"};
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: 300ms;

    &:hover {
        transform: scale(1.03);
    }
`;

export const StyledProductHeader = styled.section`
    padding: 0.5rem;
    color: white;
    font-size: 20px;
`

export const StyledProductFooter = styled.section`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
`

export const StyledProductImg = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `

export const StyledProductButton = styled.button`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    font-weight: bold;
    color: white;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    outline: none;
`