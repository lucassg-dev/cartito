import styled from "styled-components";

export const StyledNavButton = styled.button`
    background-color: brown;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    transition: ease-in-out 0.3s;
    transition-property: background-color, color, box-shadow, transform;
    &:hover {
        background-color: #8B0000;
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
`