import styled from "styled-components";

interface StyledNavCartProps {
    isActive?: boolean;
}

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

export const StyledNavCart = styled.div<StyledNavCartProps>`
    
    background-color: brown;
    color: ${(wWidth > wHeight) ? 'white' : 'brown '};
    margin: ${props => props.isActive ? '1rem 0' : '0'};
    border-radius: 8px;
    overflow: hidden;
    
    max-height: ${props => props.isActive ? '100vh' : '0'};
    transition:  0.3s;
    
    position: ${(wWidth > wHeight) ? 'fixed' : 'static'};
    
    ${(wWidth > wHeight) 
    ? `
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    right: 1.5rem;
    padding: 0 1rem;
    `
    : `
    width: 100%;
    `}
`;

export const StyledCart = styled.section<StyledNavCartProps>`
    background-color: white;
    color: brown;
    border-radius: 8px;
    padding: ${props => props.isActive ? '0.5rem' : '0 0.5rem'};
    max-height: ${props => props.isActive ? '100vh' : '0'};
    transition:  0.15s;
    overflow: hidden;
    ${(wWidth > wHeight) ? 'margin: 1rem 0;' : 'margin: 0;'}
`