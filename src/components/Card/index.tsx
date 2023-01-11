import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Text from 'components/Text';


import {
  CardWrapper, 
  IconWrapper, 
  CardFooter, 
} from './card.styled'

interface CardProps {
  onClick: any;
}

const Card: React.FC<CardProps> = ({onClick}) => {

  return (
    <div>
        <CardWrapper onClick={onClick}>
            <div>
              <Text 
                text='The Fisherman'
                fontSize='16x'
                fontWeight={700}
              />
              <Text 
                text='Today I was .....'
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
                <DeleteIcon sx={{ color: 'red', fontSize: 18 }} />
                <EditIcon color='disabled' sx={{ fontSize: 18 }}/>
            </IconWrapper>
          </CardFooter>
        </CardWrapper>
    </div>
  )
}

export default Card