import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from './login.styled'
import { signin } from 'redux/slices/user';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {data, loading, error}: any = useSelector((state: RootState) => state.user )
  
  const [inputs, setInputs] = useState({
    username: 'Simbiat',
    password: 'Simbiat1234'
  })

  useEffect(() => {
  if(data?.status  === "Success"){
    navigate('/dashboard')
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
 

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
      {error && <p style={{ color: "red" }}> {error}</p>}
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
            text={loading ? "loading ...": 'Login'}
            bgColor='#081630'
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