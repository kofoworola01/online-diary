import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Text from 'components/Text';
import { Fragment } from 'react';


import {
  CardWrapper,
  IconWrapper,
  CardFooter,
} from './card.styled'

interface CardProps {
  onClick: any;
  text: string;
  title: string;
  handleDelete?: any;
}

const Card: React.FC<CardProps> = ({ onClick, text, title, handleDelete }) => {

  return (
    <>
      <CardWrapper>
        <div onClick={onClick}>
          <Text
            text={title}
            fontSize='16x'
            fontWeight={700}
          />
          <Text
            text={text}
            fontSize='14px'
          />
        </div>
        <CardFooter>
          <IconWrapper width=''>
            <Text
              text='9 Jan, 2023, 10:47'
              fontSize='12px'
            />
          </IconWrapper>
          <IconWrapper width>
            <div onClick={handleDelete} >
              <DeleteIcon sx={{ color: 'red', fontSize: 18 }} />
            </div>
            <EditIcon color='disabled' sx={{ fontSize: 18 }} />
          </IconWrapper>
        </CardFooter>
      </CardWrapper>
    </>
  )
}

export default Card