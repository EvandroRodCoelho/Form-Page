import  styled  from 'styled-components';
import { colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
export const Title = styled.h1`
    font-style: normal;
    font-weight: ${Fonts.weight.Bold};
    font-size: 36px;
    line-height: 55px;
    color: ${colors.gray[800]};
`;
