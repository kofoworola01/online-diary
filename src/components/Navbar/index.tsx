import React from 'react'
import { useNavigate } from "react-router-dom";
import Text from '../Text';
import { Wrapper} from './navbar.styled'

interface NavbarProps {
  hideLogin?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({hideLogin}) => {
  const navigate = useNavigate()

  return (
    <>
      <Wrapper>
        <Text fontSize={'23px'} onClick={() => navigate('/')} text='Online Journal'/>
        {!hideLogin && <Text onClick={() => navigate('/login')} text='Login' />}
      </Wrapper>  
    </>
  )
}

export default Navbar