import { StyledNavCart, StyledCart, StyledCartButton, StyledClearCartButton, StyledCartHeader, StyledCartFooter } from "./styled";
import CartItem from "../CartItem";

interface NavCartProps {
    isActive?: boolean;
}

const NavCart = ({ isActive }: NavCartProps) => {
    return(
        <StyledNavCart isActive={isActive}>
                <StyledCartHeader>
                    <h3 style={{borderBottom: "1px dashed brown", paddingBottom: "0.5rem"}}>
                    Carrinho
                    </h3>
                </StyledCartHeader>
            <StyledCart isActive={isActive}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
            </StyledCart>
            <StyledCartFooter>
                <StyledCartButton>Finalizar Pedido</StyledCartButton>
                <StyledClearCartButton><small>Limpar Carrinho</small></StyledClearCartButton>
            </StyledCartFooter>
        </StyledNavCart>
    )
};

export default NavCart;