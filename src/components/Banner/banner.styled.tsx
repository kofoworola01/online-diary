import styled from 'styled-components'

export const Image = styled.div`
    width: 50%;
img{
    object-fit: contain;
     width: 100%;
    }
`
export const Container = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 100px 50px;
`
export const TextWrapper = styled.div`
    width: 40%;

    h1 {
        color: black;
        font-size: 45px;
    }
`