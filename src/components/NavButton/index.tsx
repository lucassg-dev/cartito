import { StyledNavButton } from "./styled";
import { IoCart, IoClose } from "react-icons/io5";

interface NavButtonProps {
    onClick?: () => void;
    isActive?: boolean;
}

const NavButton = ({ onClick, isActive }: NavButtonProps) => {

    return (
        <StyledNavButton onClick={onClick}>
            {isActive ? <IoClose size={36}/> : <IoCart size={36}/>}
        </StyledNavButton>
    );
};

export default NavButton;