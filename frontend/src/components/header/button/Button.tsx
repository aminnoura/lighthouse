import React, { FC, ReactElement, ReactNode } from 'react';
import './button.scss';

type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function,
    children?: ReactNode
};

const Button: FC<Props> = ( { text, disable, className, onClick, children = 'Click' } ) : ReactElement  => {
    const value = text || children;
    return (
        <button className={disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}>{value}</button>
    )
}

export default Button;