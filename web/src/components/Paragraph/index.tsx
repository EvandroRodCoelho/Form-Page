import { ReactNode } from "react";
import * as S from "./styles";
interface PropsParagraph {
    children: ReactNode;
}

export function Paragraph({children}:PropsParagraph) {
    return (
        <S.Paragraph>
            {children}
        </S.Paragraph>
    );
}
