import styled from "styled-components";
const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

export const StyledHeader = styled.header`
    background-color: brown;
    width: 100%;

    position: fixed;
    left: 0;
    ${(wWidth > wHeight) ?'top: 0;' :'bottom: 0;'}

    padding: 0.5rem 1.5rem 0 1.5rem ;
`

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;
    margin-bottom: 0.5rem;
`