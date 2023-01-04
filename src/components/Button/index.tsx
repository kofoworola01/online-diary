import React from 'react'
import {ButtonWrapper} from './button.styled'

interface ButtonProps {
  text: String;
  children?: React.ReactNode;
  bgColor: string
}

const Button: React.FC<ButtonProps> = ({text, bgColor}) => {
  return (
    <ButtonWrapper bgColor={bgColor}>
      {text}
    </ButtonWrapper>
  )
}

export default Button