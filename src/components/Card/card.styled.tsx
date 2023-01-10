import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    grid-row-gap: 66px;
    padding: 0px 22px 0px 21px;
    width: 100%;
    height: 199px;
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 0px 9px rgb(0 0 0 / 6%);
    margin: 0 20px 20px 0;
    box-sizing: border-box;
    cursor: pointer;
    color: rgba(1,26,60,0.75);

    &:hover {
        transform: scale(1.07);
    }
`
export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconWrapper = styled(CardFooter)<{width: any}>`
    font-size: 18px;
    width: ${(({width}) => width && '18%')};
`
export const ModalWrapper = styled.div`
    height: 80vh;
    background-color: whitesmoke;
    width: 50%;
    border: 2px solid whitesmoke !important;
    top: 50%;
    left: 0;
    transform: translate(40%, 0%);
    margin: 50px;
`
export const ModalContent = styled.div`
    padding: 25px;
    position: relative;
    height: 46vh;
`
export const ModalHeader = styled.div`
    padding: 25px;
    color: #9370DB;
`
export const BtnWrapper = styled(CardFooter)`
    position: absolute;
    width: 34%;
    bottom: -50px;
    left: 34%;
`