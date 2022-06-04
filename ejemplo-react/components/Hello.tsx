import {ReactNode} from "react";

type Props = {
    children?: ReactNode
}

const Hello = ({children}: Props) => {
    return (
        <>
            <h6>Me cargaron dinamicamente</h6>
            <div>{children}</div>
        </>
    )
}

export default Hello
