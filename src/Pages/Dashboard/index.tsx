import React from 'react'
import AvatarImage from '../../images/avatar2.png'
import Card from 'components/Card'
import Text from 'components/Text'

import { DashboardWrapper, Sidebar, Content, ImageWrapper, CardContainer } from './dashboard.styled'

const Dashboard = () => {

    return (
        <DashboardWrapper>
            <Sidebar>
                <ImageWrapper src={AvatarImage} />
                <div>
                    <Text text='Profile' />
                    <Text text='Invite a friend' />
                    <Text text='Sign out' />
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