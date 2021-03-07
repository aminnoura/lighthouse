import React, { FC, ReactElement, ReactNode } from 'react';
import './button.scss';

type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function,
    children?: ReactNode
};

const Button: FC<Props> = ( props ) : ReactElement  => {

    const { text, disable, className, onClick, children = 'Click' }=props;
    const value =text || children   ;
    return (
        <button disabled={disable?true:false} className={disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}>{value}</button>
    )
}

export default Button;