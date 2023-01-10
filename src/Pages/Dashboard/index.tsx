import React from 'react'
import AvatarImage from '../../images/avatar2.png'
import Card from 'components/Card'
import Text from 'components/Text'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

import { DashboardWrapper, Sidebar, Content, ImageWrapper, CardContainer, IconWrapper } from './dashboard.styled'

const Dashboard = () => {

    const SiderbarList = [
        {
            name: 'Profile',
            icon: <PersonIcon />
        },
        {
            name: 'Invite',
            icon: <EmailIcon />
        },
        {
            name: 'Logout',
            icon: <LogoutIcon />
        },
        
    ]

    return (
        <DashboardWrapper>
            <Sidebar>
                <ImageWrapper src={AvatarImage} />
                <div style={{marginTop: 40, width: '44%'}}>
                    {SiderbarList.map((item) => (
                        <IconWrapper>
                            {item.icon}
                            <Text text={item.name} pointer />
                        </IconWrapper>
                    ))}
                </div>
            </Sidebar>
            <Content>
                <div>
                    <Text
                        text='Welcome Kofoworola!'
                        fontWeight={700}
                        fontSize={'25px'}
                    />
                </div>
                <CardContainer>
                    {[...Array(8)].map(i => (
                        <div key={i}>
                            <Card />
                        </div>
                    ))}
                </CardContainer>
            </Content>
        </DashboardWrapper>
    )
}

export default Dashboard