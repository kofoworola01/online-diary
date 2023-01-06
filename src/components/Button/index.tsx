import React from 'react'
import {ButtonWrapper} from './button.styled'

interface ButtonProps {
  text: String;
  children?: React.ReactNode;
  bgColor: string
  style?: {},
  onClick: any,
}

const Button: React.FC<ButtonProps> = ({text, bgColor, style, onClick}) => {
  return (
    <ButtonWrapper bgColor={bgColor} style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  )
}

export default Button