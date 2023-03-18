import  styled  from 'styled-components';
import { colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
export const Paragraph = styled.p`
   font-style: normal;
    font-weight: ${Fonts.weight.Regular};
    font-size: 16px;
    line-height: 24px;
    color:${colors.gray[600]}
`;
