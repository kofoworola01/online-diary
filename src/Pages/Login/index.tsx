import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from './login.styled'

const Login = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    userName: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(inputs, '------')

  return (
    <div>
      <Navbar hideLogin />
      <FormBox>
        <Text
          text='WELCOME BACK'
          fontWeight={700}
          fontSize={'25px'}
          alignCenter
        />
        <InputFields 
          name='userName'
          placeholder='Enter your username' 
          value={inputs.userName}
          onChange={handleChange}
        />
        <InputFields 
          name='password'
          placeholder='Enter your password'
          value={inputs.password}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button
            text={'Login'}
            bgColor='#9370DB'
            onClick={() => {navigate('/dashboard')}}
            style={{marginTop: 60}}
          />
          <Text
          text='Not yet a user? Create Account'
          fontWeight='normal'
          fontSize={'15px'}
          alignCenter
        />
        </ButtonWrapper>
      </FormBox>
    </div>
  )
}

export default Login