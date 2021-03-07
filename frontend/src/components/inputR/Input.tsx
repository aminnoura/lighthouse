import React, { FC, ReactElement, ReactNode } from 'react';
import './input.scss';

type PropsType = {
    type?: string,
    placeholder?:string,
    label?:string,
    value?:string | number,
    disable?: boolean,
    className?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    children?: ReactNode
    options?:string[],
    name?:string
} ;

const Input: FC<PropsType> = ( props ) : ReactElement  => { 
    const {name, options, type, placeholder, label,value,disable,className,onChange, children = 'Click' }=props;
   if(type==="number"){
        return (
            <input onChange={onChange} type="number" value={value} />
            
                    
        )

   } else if(type==="radio"){
    return (
        <div>
            {
                options?.map((option,index)=>{
                    return (
                        <label key={index}>  
                            {option}
                            <input  checked={option=== value} name={name} onChange={onChange} type="radio" value={option} />
                        </label>
                    )
                }
                
                )

            }
        </div>

                
    )
   }

    return (
        <input placeholder={placeholder} onChange={onChange} value={value} />
                 
        )
}

export default Input;