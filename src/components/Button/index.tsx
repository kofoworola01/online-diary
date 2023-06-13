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
  border?: string,
}

const Button: React.FC<ButtonProps> = ({text, bgColor, style, onClick, color, width, height, border}) => {
  return (
    <ButtonWrapper 
      bgColor={bgColor} 
      style={style} 
      onClick={onClick} 
      width={width} 
      color={color} 
      height={height}
      data-testid="btn"
      >
      {text}
    </ButtonWrapper>
  )
}

export default Button