import React from 'react'
import Button from 'components/Button'
import BannerImage from '../../images/pngtree-girl-diary-write-journal-teen-png-image_5553312.jpeg'
import { Image, Container, TextWrapper } from './banner.styled'


const Banner = () => {
  return (
    <div>
        <Container>
            <TextWrapper>
                <h1>The Ultimate Online <span style={{color: '#9370DB'}}>Journal</span></h1> 
                <p>
                    Each new day is a blank page in the diary of your life. 
                    The secret of success is in turning that diary into the best story you possibly can. ― Douglas Pagels.
                </p>
                <Button
                    text='Get Started Now'
                    bgColor='#651ff5'
                    // bgColor='#FF7F50'
                />
               
            </TextWrapper>
            <Image src={BannerImage} />
        </Container>
    </div>
  )
}

export default Banner