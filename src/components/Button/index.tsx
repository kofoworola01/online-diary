import React from 'react'
import {ButtonWrapper} from './button.styled'

interface ButtonProps {
  text: String;
  children?: React.ReactNode;
  bgColor: string
  style?: {},
  onClick: any,
  color?: string,
  width?: string,
  height?: string,
}

const Button: React.FC<ButtonProps> = ({text, bgColor, style, onClick, color, width, height}) => {
  return (
    <ButtonWrapper 
      bgColor={bgColor} 
      style={style} 
      onClick={onClick} 
      width={width} 
      color={color} 
      height={height}
      >
      {text}
    </ButtonWrapper>
  )
}

export default Button