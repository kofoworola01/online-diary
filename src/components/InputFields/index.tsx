import React from 'react'
import {InputWrapper} from './inputfields.styled'
// import VisibilityIcon from '@mui/icons-material/Visibility';

interface InputFieldsProps {
  placeholder?: string;
  value: string;
  onChange: any;
  name: string;
  marginTop?: string;
  inputWidth?: string;
  marginBottom?: string;
  border?: string;
  type?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  placeholder, 
  value, 
  onChange, 
  name, 
  marginTop, 
  inputWidth, 
  marginBottom,
  border,
  type,
}) => {

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.target.value
  // }
  return (
    <div style={{marginTop: marginTop ? marginTop : 50, marginBottom: marginBottom}}>
      <InputWrapper 
        type={type ? type : 'text'}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        inputWidth={inputWidth}
        border={border}
      />
    {/* {type === 'password' && <VisibilityIcon />} */}
    </div>
  )
}

export default InputFields