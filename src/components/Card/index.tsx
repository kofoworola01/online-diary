import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Text from 'components/Text';
import Modal from '@mui/material/Modal';
import Button from 'components/Button';

import {CardWrapper, IconWrapper, CardFooter, ModalWrapper, ModalContent, ModalHeader, BtnWrapper} from './card.styled'

const Card = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Modal
          open={open}
          onClose={handleClose}
          children={
            <ModalWrapper>
              <div>
                <ModalHeader>
                  <Text 
                    text='Update your entry'
                    fontSize='20px'
                    alignCenter
                  />
                </ModalHeader>
                <ModalContent>
                 <BtnWrapper>
                  <Button 
                      text='Cancel'
                      bgColor='#fff'
                      onClick={() => setOpen(false)}
                      color='#9370DB'
                      width='92px'
                      height='34px'
                    />
                    <Button 
                      text='Update'
                      bgColor='#9370DB'
                      onClick={() => {}}
                      width='92px'
                      height='34px'
                    />
                 </BtnWrapper>
                </ModalContent>
              </div>

            </ModalWrapper>
          }
        />
       
        <CardWrapper onClick={handleOpen}>
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