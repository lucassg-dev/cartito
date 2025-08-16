import { StyledDisplayCategory, StyledCategoryHeader } from "./styled";

interface DisplayCategoryProps {
    children: React.ReactNode,
    categoryName: string
};

const DisplayCategory = ({children, categoryName}:DisplayCategoryProps)=> {
    return (
        <StyledDisplayCategory>
            <StyledCategoryHeader>
                <h2>
                    {categoryName}
                </h2>
            </StyledCategoryHeader>
            {children}
        </StyledDisplayCategory>
    )
};

export default DisplayCategory;
