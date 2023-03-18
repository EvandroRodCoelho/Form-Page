import  styled  from 'styled-components';
import { colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
export const Button = styled.button`
 display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;

        width: 384px;
        height: 56px;
        color: ${colors.white};
        cursor: pointer;
        background: ${colors.purple.dark};
        border-radius: 4px;
        font-style: normal;
        font-weight: ${Fonts.weight.Bold};
        font-size: 16px;
        line-height: 24px;
        border:0;
        transition:10.s;
        &:hover, &:focus {
           background-color: ${colors.purple.hover};
           border: none;
           outline: 0;
        }
`;
