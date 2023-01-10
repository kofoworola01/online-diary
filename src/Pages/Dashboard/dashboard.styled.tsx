import styled from 'styled-components'

export const DashboardWrapper = styled.div`
    display: flex;
`
export const Sidebar = styled.div`
    width: 20%;
    background: #dcd8e5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    box-sizing: border-box;
    position: fixed;

`
export const Content = styled.div`
    width: 70%;
    padding-top: 40px;
    padding-left: 300px;
`
export const ImageWrapper = styled.img`
    border-radius: 50%;
    width: 120px;
    height: auto;
`
export const CardContainer = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 32.5% 32.5% 32.5%;
    grid-gap: 1.25%;
    margin-top: 24px;
`
export const IconWrapper = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    align-items: center;
    display: grid;
    grid-template-columns: 40% 60%;
`
