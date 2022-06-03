import {ReactNode} from "react";

type Props = {
    children?: ReactNode
}

const Hello = ({children}: Props) => {
    return (
        <>
            <h1>Me cargaron dinamicamente</h1>
            <p>{children}</p>
        </>
    )
}

export default Hello
