import styled from 'styled-components'

export const TextWrapper = styled.p<{
    fontSize?: string, 
    fontWeight: any, 
    alignCenter: string,
    pointer: any,
    }>`
    font-size: ${(({fontSize}) => fontSize)};
    cursor: ${(({pointer}) => pointer && 'pointer')};
    font-weight: ${(({fontWeight}) => fontWeight)};
    text-align: ${(({alignCenter}) => alignCenter && 'center')};
`