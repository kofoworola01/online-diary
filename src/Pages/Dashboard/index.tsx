import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AvatarImage from '../../images/avatar2.png'
import Card from 'components/Card'
import Text from 'components/Text'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from '@mui/material/Modal';
import InputFields from 'components/InputFields';
import AddIcon from '@mui/icons-material/Add';
import Button from 'components/Button';


import {
    DashboardWrapper,
    Sidebar,
    Content,
    ImageWrapper,
    CardContainer,
    IconWrapper,
    ModalWrapper,
    ModalContent,
    ModalHeader,
    BtnWrapper,
    TopContent,
} from './dashboard.styled'

const Dashboard = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [newEntry, setNewEntry] = useState(false)
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
        setNewEntry(false)
    };

    const handleAdd = () => {
        setOpen(false)
        setNewEntry(false)
    }

    const [inputs, setInputs] = useState({
        title: '',
        text: ''
    })

    const handleChange = (event: React.ChangeEvent<any>) => {
        const { name, value } = event.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(inputs)

    const SiderbarList = [
        {
            name: 'Profile',
            icon: <PersonIcon />,
            // path: 'login'
        },
        {
            name: 'Invite',
            icon: <EmailIcon />,
            // path: 'login'
        },
        {
            name: 'Logout',
            icon: <LogoutIcon />,
            path: 'login'
        },
    ]

    return (
        <DashboardWrapper>
            <Modal
                open={open}
                onClose={handleClose}
                children={
                    <ModalWrapper>
                        <div>
                            <ModalHeader>
                                <Text
                                    text={`${newEntry ? 'Enter' : 'Update'} your entry`}
                                    fontSize='20px'
                                    alignCenter
                                />
                            </ModalHeader>
                            <ModalContent>
                                <Text
                                    text='Entry Title'
                                    fontWeight={500}
                                />
                                <InputFields
                                    name='title'
                                    marginTop='0px'
                                    marginBottom='40px'
                                    value={inputs.title}
                                    onChange={handleChange}
                                    inputWidth='97%'
                                    border={'1px solid #000000'}
                                />
                                <textarea
                                    rows={10}
                                    name='text'
                                    defaultValue={inputs.text}
                                    onChange={handleChange}
                                    style={{
                                        width: "97%",
                                        height: "200px",
                                        padding: '10px',
                                        borderRadius: '10px',
                                    }}
                                />
                                <BtnWrapper>
                                    <Button
                                        text='Cancel'
                                        bgColor='#fff'
                                        onClick={handleClose}
                                        color='#9370DB'
                                        width='92px'
                                        height='34px'
                                    />
                                    <Button
                                        text={newEntry ? 'Add' : 'Update'}
                                        bgColor='#9370DB'
                                        onClick={handleAdd}
                                        width='92px'
                                        height='34px'
                                    />
                                </BtnWrapper>
                            </ModalContent>
                        </div>

                    </ModalWrapper>
                }
            />
            <Sidebar>
                <ImageWrapper src={AvatarImage} />
                <div style={{ marginTop: 40, width: '44%' }}>
                    {SiderbarList.map((item, i) => (
                        <IconWrapper onClick={() => navigate(`/${item.path}`)} key={i}>
                            {item.icon}
                            <Text text={item.name} pointer />
                        </IconWrapper>
                    ))}
                </div>
            </Sidebar>
            <Content>
                <TopContent>
                    <Text
                        text='Welcome Kofoworola!'
                        fontWeight={700}
                        fontSize={'25px'}
                    />
                    <TopContent 
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                            setNewEntry(true)
                            handleOpen()
                        }}
                    >
                        <AddIcon />
                        <Text 
                            text='Add'
                        />
                    </TopContent>
                </TopContent>
                <CardContainer>
                    {[...Array(8)].map(i => (
                        <div key={i}>
                            <Card
                                onClick={handleOpen}
                            />
                        </div>
                    ))}
                </CardContainer>
            </Content>
        </DashboardWrapper>
    )
}

export default Dashboard