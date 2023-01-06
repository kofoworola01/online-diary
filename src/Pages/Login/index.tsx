import React from 'react'
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from './login.styled'

const Login = () => {
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
        <InputFields />
        <InputFields />
        <ButtonWrapper>
          <Button
            text={'Login'}
            bgColor='#9370DB'
            onClick={() => {}}
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