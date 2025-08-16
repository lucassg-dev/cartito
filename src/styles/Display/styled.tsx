import styled from 'styled-components';
import { wWidth, wHeight } from '../../utils/Viewport';

export const StyledDisplay = styled.main`
    padding: 1.5rem;
    ${wWidth > wHeight ? 'padding: 5rem 1rem;' : 'padding: 0 0.5rem;'}
    background-color: white;
    color: brown;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: fit-content;
`