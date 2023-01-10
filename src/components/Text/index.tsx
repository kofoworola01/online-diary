import React from 'react'
import { TextWrapper } from './text.styled'

interface TextProps {
    text: string;
    fontSize?: string;
    onClick?: any;
    fontWeight?: any;
    alignCenter?: any;
    pointer?: boolean;
}

const Text: React.FC<TextProps> = ({text, fontSize, onClick, fontWeight, alignCenter, pointer}) => {
  return (
    <div>
        <TextWrapper 
          fontSize={fontSize} 
          onClick={onClick} 
          fontWeight={fontWeight} 
          alignCenter={alignCenter}
          pointer={pointer}
          >
          {text}
        </TextWrapper>
    </div>
  )
}

export default Text