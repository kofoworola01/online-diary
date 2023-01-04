import React from 'react'
import  GlobalStyle  from './globalStyles.styled'
import Navbar from './components/Navbar'
import Banner from 'components/Banner'

const App:React.FC = ()=> (
  <>
    <GlobalStyle />
    <Navbar />
    <Banner />
  </>
)

export default App