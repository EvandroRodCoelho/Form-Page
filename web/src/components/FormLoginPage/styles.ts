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
    @media (max-width: 700px) {
        gap:20px;
        width: 90%;
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
export const Input = styled.input`
    padding: 16px 12px;
    gap: 10px;

    max-width: 384px;
    height: 53px;

    background: ${colors.white};


    border: 1px solid ${colors.gray[200]};
    border-radius: 4px;
    width: 100%;
    outline: none;

    &:hover , &:focus {
        border: 1px solid ${colors.purple.dark};
    }
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color:${colors.gray[400]}
    }
`;
