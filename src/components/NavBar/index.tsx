import { StyledHeader, StyledNav } from "../../styles/NavBar/styled";
import NavButton from "../NavButton";

const NavBar = () => {
    return(
        <StyledHeader>
            <StyledNav>
                <h1>Sua Loja</h1>
                <NavButton />
            </StyledNav>
        </StyledHeader>
    )
};

export default NavBar;