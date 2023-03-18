import { LabelHTMLAttributes } from "react";
import * as S from "./styles";
interface PropsLabel extends LabelHTMLAttributes<HTMLLabelElement> {

}

export function Label({ ...props}:PropsLabel) {
    return (
        <S.Label {...props} />
    );
}
