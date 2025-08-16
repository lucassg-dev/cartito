import { StyledProductCard, StyledProductHeader, StyledProductFooter, StyledProductImg, StyledProductButton } from "./styled";

const ProductCard = () => {
    return (
        <StyledProductButton>
            <StyledProductCard>
                <StyledProductHeader>
                    <h4>Product Name</h4>
                </StyledProductHeader>
                <StyledProductImg>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.rgbbfRIVjE6P3y2rOgXQ-gHaE7?rs=1&pid=ImgDetMain&o=7&rm=30" alt="product" />
                </StyledProductImg>
                <StyledProductFooter>
                    <p>Clique para ver detalhes</p>
                </StyledProductFooter>
            </StyledProductCard>
        </StyledProductButton>
    )
}

export default ProductCard;