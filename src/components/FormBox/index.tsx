import React from 'react'
import {Wrapper} from './form.styled'

interface FormBoxProps {
  children: React.ReactNode;
}

const FormBox: React.FC<FormBoxProps> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default FormBox