import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #081630;
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0 20px;
  color: whitesmoke;
  align-items: center;
`;

export const Text = styled.p<{fontSize?: string}>`
  font-size: ${(({fontSize}) => fontSize)};
  cursor: pointer;
`

