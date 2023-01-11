import styled from 'styled-components'

export const DashboardWrapper = styled.div`
    display: flex;
`
export const FlexWrapper = styled.div`
    display: flex;
    align-items: center; 
`
export const Sidebar = styled(FlexWrapper)`
    width: 20%;
    background: #dcd8e5;
    height: 100vh;
    flex-direction: column;
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
    align-items: center;
    display: grid;
    grid-template-columns: 40% 60%;
`
export const ModalWrapper = styled.div`
    height: 75vh;
    background-color: whitesmoke;
    width: 50%;
    border: 2px solid whitesmoke !important;
    top: 50%;
    left: 0;
    transform: translate(40%, 0%);
    margin: 50px;
    border-radius: 12px;
`
export const ModalContent = styled.div`
    padding: 0px 25px;
    position: relative;
    height: fit-content;
`
export const ModalHeader = styled.div`
    padding: 15px 15px 0 15px;
    color: #9370DB;
`
export const BtnWrapper = styled(FlexWrapper)`
    justify-content: space-between;
    position: absolute;
    width: 34%;
    bottom: -60px;
    left: 34%;
`

export const TopContent = styled(FlexWrapper)`
    justify-content: space-between;
`