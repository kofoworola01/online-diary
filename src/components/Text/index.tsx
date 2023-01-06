import React from 'react'
import { TextWrapper } from './text.styled'

interface TextProps {
    text: string;
    fontSize?: string;
    onClick?: any;
    fontWeight?: any;
    alignCenter?: any;
}

const Text: React.FC<TextProps> = ({text, fontSize, onClick, fontWeight, alignCenter}) => {
  return (
    <div>
        <TextWrapper fontSize={fontSize} onClick={onClick} fontWeight={fontWeight} alignCenter={alignCenter}>
          {text}
        </TextWrapper>
    </div>
  )
}

export default Text