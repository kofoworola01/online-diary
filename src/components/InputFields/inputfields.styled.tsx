import styled from 'styled-components'

export const InputWrapper = styled.input<{inputWidth?: string, border?: string}>`
    width: ${(({inputWidth}) => inputWidth ? inputWidth : '90%')};
    border-style: none;
    border-radius: 10px;
    padding: 15px 10px;
    border: ${(({border}) => border && border)}; 

    &:focus {
        outline: none;
    }
`