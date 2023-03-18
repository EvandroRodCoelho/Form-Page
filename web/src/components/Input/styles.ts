import styled from "styled-components";
import { colors } from "../../styles/colors";

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


export const ContainerInputWithIcon = styled.div`
    display: flex;
    padding: 16px 12px;
    gap: 10px;

    max-width: 384px;
    height: 53px;

    background: ${colors.white};


    border: 1px solid ${colors.gray[200]};
    border-radius: 4px;
    width: 100%;
    position: relative;
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
    input {
        border: 0;
        outline: 0;
    }
    button {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 53px;
        width:50px;
    }
`;
