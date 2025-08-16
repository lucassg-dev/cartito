import styled from "styled-components";

interface StyledElementProps {
    width?: string;
    justify?: string;
    gap?: string;
}

export const StyledCartItem = styled.div<StyledElementProps>`
    width: ${props => props.width || "fit-content"};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify || "start"};
    align-items: center;
    border-bottom: dashed 1px brown;
    padding: 0.5rem 0;
    gap: ${props => props.gap || "0"};
`

export const StyledCartItemRow = styled.section<StyledElementProps>`
    width: ${props => props.width || "fit-content"};
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify || "start"};
    align-items: center;
    gap: ${props => props.gap || "0"};
    `;

export const StyledCartItemColumn = styled.section<StyledElementProps>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: ${props => props.justify || "start"};
    width: ${props => props.width || "fit-content"};
    gap: ${props => props.gap || "0"};
`;

export const StyledCartItemButton = styled.button`
    background-color: transparent;
    color: brown;
    border: none;
    border-radius: 50%;
    padding: 0.25rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: brown;
        color: white;
    }
`
