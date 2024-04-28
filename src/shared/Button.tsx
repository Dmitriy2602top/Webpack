import React, { FC } from 'react'
type ButtonProps = Partial<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button className={'red'} {...props} />
    )
}


