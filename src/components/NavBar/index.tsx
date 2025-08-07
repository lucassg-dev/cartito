import { StyledHeader, StyledNav } from "../../styles/NavBar/styled";
import NavButton from "../NavButton";
import { useState } from "react";
import NavCart from "../NavCart";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return(
        <StyledHeader>
            <StyledNav>
                <h1>Cantinho do Sabor</h1>
                <NavButton onClick={handleButtonClick} isActive={isActive}/>
            </StyledNav>
            <NavCart isActive={isActive} />
        </StyledHeader>
    )
};

export default NavBar;