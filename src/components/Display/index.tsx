import { StyledDisplay } from "./styled";
import DisplayCategory from "../DisplayCategory";
import ProductCard from "../ProductCard";

const Display = () => {
    return (
        <StyledDisplay>
            <DisplayCategory categoryName="Lanches">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </DisplayCategory>
            <DisplayCategory categoryName="Pizzas">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </DisplayCategory>
        </StyledDisplay>
    )
};

export default Display;