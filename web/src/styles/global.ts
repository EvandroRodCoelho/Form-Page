import { createGlobalStyle } from 'styled-components';
import { Fonts } from './fonts';
export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: ${Fonts.family};
        text-decoration: none;
    }
`;
