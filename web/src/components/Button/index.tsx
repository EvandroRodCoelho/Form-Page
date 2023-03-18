import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";
interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

export function Button({children, ...props}:PropsButton) {
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    );
}
