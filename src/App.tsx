import React from 'react'
import  GlobalStyle  from './globalStyles.styled'
import Navbar from './components/Navbar'

const App:React.FC = ()=> (
  <>
    <GlobalStyle />
    <Navbar />
  </>
)

export default App