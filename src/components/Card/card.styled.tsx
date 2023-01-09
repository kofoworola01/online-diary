import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: inline-grid;
    grid-row-gap: 66px;
    padding: 25px 22px 0px 21px;
    width: 100%;
    height: 178px;
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.06);
    margin: 0 20px 20px 0;
    box-sizing: border-box;
    cursor: pointer;
    color: rgba(1, 26, 60, 0.75);

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
