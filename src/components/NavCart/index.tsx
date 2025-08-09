import { StyledNavCart, StyledCart, StyledCartButton } from "../../styles/NavCart/styled";
import CartItem from "../CartItem";

interface NavCartProps {
    isActive?: boolean;
}

const NavCart = ({ isActive }: NavCartProps) => {
    return(
        <StyledNavCart isActive={isActive}>
            <StyledCart isActive={isActive}>
                <h3 style={{borderBottom: "1px dashed brown", paddingBottom: "0.5rem"}}>
                    Carrinho
                </h3>
                <section>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </section>
            </StyledCart>
            <StyledCartButton>Finalizar Compra</StyledCartButton>
        </StyledNavCart>
    )
};

export default NavCart;