import { StyledNavCart, StyledCart } from "../../styles/NavCart/styled";

interface NavCartProps {
    isActive?: boolean;
}

const NavCart = ({ isActive }: NavCartProps) => {
    return(
        <StyledNavCart isActive={isActive}>
            <StyledCart isActive={isActive}>
                <h3>
                    Carrinho
                </h3>
                <section>
                    <p>
                        Seu carrinho está vazio
                    </p>
                </section>
            </StyledCart>
        </StyledNavCart>
    )
};

export default NavCart;