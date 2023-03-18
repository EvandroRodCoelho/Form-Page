import  styled  from 'styled-components';
import { colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
export const Container = styled.form`
    display:  flex;
    flex-direction: column;
    gap:32px;
    a {
        font-weight: ${Fonts.weight.Bold};
    }
`;
export const ContainerPasswordInformation = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-between;
    font-size: 14px;
    font-weight: ${Fonts.weight.Bold};
    margin-top: 16px;
`;


export const ContainerPasswordInput = styled.div`
    display: flex;
`;
