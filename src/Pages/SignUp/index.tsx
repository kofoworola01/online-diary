import React, {useState}  from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from '../Login/login.styled'

const SignUp = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
        <div>
      <Navbar hideLogin />
      <FormBox>
        <Text
          text='CREATE YOUR ACCOUNT'
          fontWeight={700}
          fontSize={'25px'}
          alignCenter
        />
        <InputFields
          name='userName'
          placeholder='Choose a username' 
          value={inputs.userName}
          onChange={handleChange}
        />
        <InputFields 
          placeholder='Enter your email address' 
          name='email'
          value={inputs.email}
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
            text={'SignUp'}
            bgColor='#9370DB'
            style={{marginTop: 60}}
            onClick={() => navigate('/dashboard')}
          />
          <Text
          text='Already have an account? Sign In'
          fontWeight='normal'
          fontSize={'15px'}
          alignCenter
        />
        </ButtonWrapper>
      </FormBox>
    </div>
    </div>
  )
}

export default SignUp