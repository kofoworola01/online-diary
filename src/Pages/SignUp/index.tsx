import React, {useState, useEffect}  from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from 'components/Navbar'
import FormBox from 'components/FormBox'
import InputFields from 'components/InputFields'
import Text from 'components/Text'
import Button from 'components/Button'
import { ButtonWrapper } from '../Login/login.styled'
import { signup } from 'redux/slices/userSlices';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const SignUp = () => {
  const navigate = useNavigate()
const dispatch = useAppDispatch()
const {users} = useSelector((state: RootState) => state )
const [msgError, setMsgError]= useState('')
const {user, loading} = users;

console.log(user,'<<<<<')

useEffect(() => {
if(user?.status === 'Success'){
  navigate('/login')
}else if(user?.data.status === 'Failed' || user?.data.errors){
  setMsgError(user?.data.message || user?.data.errors.email || user?.data.errors?.password)
}
},[user?.status])


  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    fullname: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = () => {
  dispatch(signup(inputs))
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
        <p style={{color: 'red'}}> {msgError}</p>
        <InputFields
          name='fullname'
          placeholder='Add your fullName' 
          value={inputs.fullname}
          onChange={handleChange}
        />
        <InputFields
          name='username'
          placeholder='Choose a username' 
          value={inputs.username}
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
          type='password'
        />
        <ButtonWrapper>
          <Button
            text={loading ? "loading ...":'SignUp'}
            // disable ={loading}
            bgColor='#9370DB'
            style={{marginTop: 60}}
            onClick={handleSubmit}
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