import { ReactNode } from "react";

interface PropsTitle {
    children: ReactNode;
}

export function Title({children}:PropsTitle) {
    return (
        <h1>
            {children}
        </h1>
    );
}
