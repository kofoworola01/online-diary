import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from './login.styled'
import { signin } from 'redux/slices/userSlices';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {users} = useSelector((state: RootState) => state )
  const {user, loading} = users;
  

  useEffect(() => {
  if(user?.status === 'Success'){
    navigate('/dashboard')
  }
  },[user?.status])
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    dispatch(signin(inputs))
  }
    

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
          name='username'
          placeholder='Enter your username' 
          value={inputs.username}
          onChange={handleChange}
        />
        <InputFields 
          name='password'
          placeholder='Enter your password'
          value={inputs.password}
          onChange={handleChange}
          type='password'
        />
        <ButtonWrapper>
          <Button
            text={'Login'}
            bgColor='#9370DB'
            onClick={handleSubmit}
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