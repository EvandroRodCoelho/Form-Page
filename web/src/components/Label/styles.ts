import  styled  from 'styled-components';
import { colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
export const Label = styled.label`
    font-style: normal;
    font-weight: ${Fonts.weight.SemiBold};
    font-size: 14px;
    line-height: 21px;
    color:${colors.gray[800]}
`;
