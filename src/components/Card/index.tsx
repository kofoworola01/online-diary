import React,{useEffect, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Text from 'components/Text';

import {
  CardWrapper,
  IconWrapper,
  CardFooter,
  TextWrapper
} from './card.styled'
import data from 'utils/data';

interface CardProps {
  handleOpenEdit: any;
  text: string;
  title: string;
  handleDelete?: any;
  date: string;
}

const Card: React.FC<CardProps> = ({ handleOpenEdit, text, date,title, handleDelete }) => {
const [color, setColor] = useState('')

useEffect(()=> {
  function getRandomColor() {
    const random = Math.floor(Math.random() * data.length);
    let color = data[random];
    setColor(color);
  }
  getRandomColor()
},[])
 

  return (
    <>
      <CardWrapper bgColor={color} data-testid='card-wrapper'>
        <TextWrapper>
          <Text
            text={title}
            fontSize='16x'
            fontWeight={700}
            data-testid='title'
          />
          <Text
            text={text}
            fontSize='14px'
            data-testid='body'
          />
        </TextWrapper>
        <CardFooter>
          <IconWrapper>
            <Text
              text={date}
              fontSize='12px'
            />
          </IconWrapper>
          <IconWrapper >
            <button onClick={handleDelete}>
              <DeleteIcon sx={{ color: 'red', fontSize: 18 }} />
            </button>
            <button onClick={handleOpenEdit}> 
            <EditIcon color='disabled' sx={{ fontSize: 18, color: 'white' }} />
            </button>
          </IconWrapper>
        </CardFooter>
      </CardWrapper>
    </>
  )
}

export default React.memo(Card)