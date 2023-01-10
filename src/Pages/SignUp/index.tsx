import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from '../Login/login.styled'

const SignUp = () => {
  const navigate = useNavigate()

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
        <InputFields placeholder='Choose a username' />
        <InputFields placeholder='Enter your email address' />
        <InputFields placeholder='Enter your password'/>
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