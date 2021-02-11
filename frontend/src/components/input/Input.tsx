import React, { FC, ReactElement, ReactNode } from 'react';
import './Input.scss';

type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onChange: Function,
    children?: ReactNode,
    id: string
};

const Input: FC<Props> = ( { id, text, disable, className, onChange } ) : ReactElement  => {
    return (
        <input id={id} value={text} onChange={(e)=>onChange(e.target.value)} className={className} />
    )
}

export default Input;