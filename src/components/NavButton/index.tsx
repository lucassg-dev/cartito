import { StyledNavButton } from "../../styles/NavButton";
import { IoCart, IoClose } from "react-icons/io5";
import { useState } from "react";

const NavButton = () => {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive(!isActive);
        // Additional logic for handling cart actions can be added here
    };

    return (
        <StyledNavButton onClick={handleClick}>
            {isActive ? <IoClose size={36}/> : <IoCart size={36}/>}
        </StyledNavButton>
    );
};

export default NavButton;