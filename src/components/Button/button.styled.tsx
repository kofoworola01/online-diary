import styled from 'styled-components'

export const ButtonWrapper = styled.div<{
    bgColor?: string, 
    color?: string,
    height?: string,
    width?: string,
    }>`
    background-color: ${(({bgColor}) => bgColor)};
    width: ${(({width}) => width ? width : '150px')};
    height: ${(({height}) => height ? height : '50px')};;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: ${(({color}) => color ? color : 'whitesmoke' )};
    border: 2px solid #9370DB;
    cursor: pointer;
`