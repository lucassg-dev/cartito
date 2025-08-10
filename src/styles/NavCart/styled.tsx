import styled from "styled-components";

interface StyledNavCartProps {
    isActive?: boolean;
}

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

export const StyledNavCart = styled.div<StyledNavCartProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: brown;
    color: ${(wWidth > wHeight) ? 'white' : 'brown '};
    margin: ${props => props.isActive ? '1rem 0' : '0'};
    border-radius: 8px;
    
    max-height: ${props => props.isActive ? '50vh' : '0'};
    transition:  0.3s;
    
    position: ${(wWidth > wHeight) ? 'fixed' : 'static'};

    width: 640px;
    overflow: hidden;
    
    ${(wWidth > wHeight) 
        ? `
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            right: 1.5rem;
            padding: 0 1rem;
        `
        : `
            width: 100%;
    `};

    gap: 1rem;
    padding: ${props => props.isActive ? '0.5rem 1rem' : '0 1rem'};
    ${(wWidth < wHeight) ? 'padding: 0 0.5rem;' :''}
`

export const StyledCart = styled.section<StyledNavCartProps>`
    width: 100%;
    background-color: white;
    color: brown;
    border-radius: 8px;
    overflow-y: auto;
    padding: ${props => props.isActive ? '0.5rem' : '0 0.5rem'};
    max-height: ${props => props.isActive ? '40vh' : '0'};
    transition:  0.15s;
    ${(wWidth > wHeight) ? 'margin: 1rem 0;' : 'margin: 0;'}
`

export const StyledCartHeader = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-bottom: 0.5rem;
`

export const StyledCartHeaderNumber = styled.section`
    width: 12%;
    text-align: start;
`

export const StyledCartHeaderDescription = styled.section`
    width: 50%;
    text-align: start;
`

export const StyledCartHeaderQuantity = styled.section`
    width: 12%;
    text-align: start;
`
export const StyledCartHeaderTotal = styled.section`
    width: 12%;
    text-align: start;
`

export const StyledCartButton = styled.button`
    background-color: brown;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    width: fit-content;

    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        background-color: #8B0000;
    }
`

export const StyledClearCartButton = styled.button`
    background-color: transparent;
    color: white;
    text-decoration: underline;
    border: none;
    margin-bottom: 0.5rem;
`