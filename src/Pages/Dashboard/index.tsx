import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AvatarImage from '../../images/avatar2.png'
import Card from 'components/Card'
import Text from 'components/Text'
import { EmptyStateIllustrator } from '../../images/emptyState'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from '@mui/material/Modal';
import InputFields from 'components/InputFields';
import AddIcon from '@mui/icons-material/Add';
import Button from 'components/Button';
import Alert from '@mui/material/Alert';

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
    EmptyState,
    ToastWrapper,
} from './dashboard.styled'

interface UserInfo {
    title: string;
    text: string;
}

const Dashboard = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [newEntry, setNewEntry] = useState(false)
    const [entries, setEntries] = useState<UserInfo[]>([])
    const [errors, setErrors] = useState({
        title: '',
        text: ''
    })
    const [inputs, setInputs] = useState({
        title: '',
        text: ''
    })

    const handleClose = () => {
        setOpen(false)
        setNewEntry(false)
    };

    const handleOpen = () => {
        setOpen(true)
        setErrors({
            title: '',
            text: '',
        })
        setInputs(preState => ({
            ...preState,
            title: '',
            text: '',
        }))
    };

    const handleAdd = () => {
        if (Object.values(inputs).some(a => a === "")) {
            setErrors({
                title: !inputs.title ? " title error" : "",
                text: !inputs.text ? " text error" : "",
            })
            return;
        }
        setOpen(false)
        setNewEntry(false)
        setEntries([...entries, inputs])
    }

    const handleChange = (event: React.ChangeEvent<any>) => {
        const { name, value } = event.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

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

    const handleDelete = (id: number) => {
        const filterEntry = entries.filter((_, i) => i !== id)
        setEntries(filterEntry)
    }
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
                            {errors.title && errors.text && <ToastWrapper>
                                <Alert severity="error">Fields may not be blank</Alert>
                            </ToastWrapper>}
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
                                    border={`1px solid  ${errors.title ? 'red' : 'black'}`}
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
                                        border: `1px solid ${errors.text ? 'red' : 'black'}`,
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
                        style={{ cursor: 'pointer' }}
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
                <>
                    {entries.length > 0 ? (
                        <CardContainer>
                            {entries.map((entry, index) => {
                                return (
                                    <div key={index}>
                                        <Card
                                            onClick={handleOpen}
                                            title={entry.title}
                                            text={entry.text}
                                            handleDelete={() => handleDelete(index)}
                                        />
                                    </div>
                                )
                            })}
                        </CardContainer>
                    ) : (
                        <EmptyState>
                            <EmptyStateIllustrator />
                            <Text text='You have no entry. Click on Add' />
                        </EmptyState>
                    )}
                </>
            </Content>
        </DashboardWrapper>
    )
}

export default Dashboard