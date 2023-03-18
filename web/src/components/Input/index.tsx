import { Children, InputHTMLAttributes, ReactNode } from "react";
import * as C from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean;
    children?: ReactNode;
}
export function InputPure({ icon, children, ...props }: InputProps) {
    return(
        <C.Input {...props} />
    )   ;
}

export function InputWithIcon ({ icon, children, ...props }: InputProps) {
    return (
        <C.ContainerInputWithIcon>
            <input  {...props}/>
            {children}

        </C.ContainerInputWithIcon>
    );
}
