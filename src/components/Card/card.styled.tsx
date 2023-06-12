import styled from 'styled-components'

export const CardWrapper = styled.div<{bgColor: string}>`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0px 22px 0px 21px;
    width: 100%;
    height: 199px;
    background: ${props => props.bgColor };
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
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`