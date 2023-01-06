import styled from 'styled-components'

export const ButtonWrapper = styled.div<{bgColor?: string}>`
    background-color: ${(({bgColor}) => bgColor)};
    width: 150px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-weight: 600;
    color: whitesmoke;
    cursor: pointer;
`