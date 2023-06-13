import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'components/Button'
import BannerImage from '../../images/undraw_personal_notebook_re_d7dc.svg'
import { Image, Container, TextWrapper } from './banner.styled'



const Banner = () => {
    const navigate = useNavigate()
    
  return (
    <div>
        <Container>
            <TextWrapper>
                <h1>The Ultimate Online <span style={{color: '#F9A826'}}>Journal</span></h1> 
                <p style={{fontWeight: 'normal'}}>
                    Each new day is a blank page in the diary of your life. 
                    The secret of success is in turning that diary into the best story you possibly can. ― Douglas Pagels.
                </p>
                <Button
                    text='Get Started Now'
                    bgColor="#081630"
                    onClick={() => navigate('/signup')}
                />
               
            </TextWrapper>
            <Image>
                <img src={BannerImage} alt='' />
            </Image>
        </Container>
    </div>
  )
}

export default Banner