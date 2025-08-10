import { StyledNavCart, StyledCart, StyledCartButton, StyledClearCartButton } from "../../styles/NavCart/styled";
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
            <StyledCartButton>Finalizar Pedido</StyledCartButton>
            <StyledClearCartButton><small>Limpar Carrinho</small></StyledClearCartButton>
        </StyledNavCart>
    )
};

export default NavCart;