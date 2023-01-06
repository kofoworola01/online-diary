import React from 'react'
import {InputWrapper} from './inputfields.styled'

interface InputFieldsProps {
  placeholder: string;
}

const InputFields: React.FC<InputFieldsProps> = ({placeholder}) => {
  return (
    <div style={{marginTop: 50}}>
    <InputWrapper 
      placeholder={placeholder}
    />
    </div>
  )
}

export default InputFields