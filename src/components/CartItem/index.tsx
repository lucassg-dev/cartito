import { StyledCartItem, StyledCartItemRow, StyledCartItemColumn, StyledCartItemButton } from "./styled";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = () => {
    return (
        <StyledCartItem width="100%">
            <StyledCartItemRow width="100%" justify="space-between">
                <StyledCartItemColumn width="10%" justify="center">
                    <p style={{ fontWeight: "bold" }}>1</p>
                </StyledCartItemColumn>
                <StyledCartItemColumn width="80%">
                    <StyledCartItemColumn justify="start">
                        <p style={{ fontWeight: "bold" }}>Hamburguer</p>
                        <small>Pão, carne, queijo, alface, tomate, molho especial. </small>
                    </StyledCartItemColumn>
                    <StyledCartItemRow gap="2rem">
                        <small style={{paddingTop: "0.5rem"}}>
                            <p>Quantidade: 2</p>
                        </small>
                        <small style={{paddingTop: "0.5rem"}}>
                            Total: R$ 15,00
                        </small>
                    </StyledCartItemRow>
                </StyledCartItemColumn>
                <StyledCartItemColumn justify="center" gap="1rem" width="10%">
                    <StyledCartItemButton><MdEdit size={18} /></StyledCartItemButton>
                    <StyledCartItemButton><FaTrashAlt size={18} /></StyledCartItemButton>
                </StyledCartItemColumn>
            </StyledCartItemRow>
        </StyledCartItem>
    )
};

export default CartItem;