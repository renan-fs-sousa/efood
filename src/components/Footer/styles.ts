import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 40px;
  background-color: #ffebd9;
  height: 298px;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const FooterText = styled.p`
  max-width: 480px;
  width: 100%;
  margin-top: 80px;
  font-size: 10px;
`

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    margin-top: 40px;
    margin-bottom: 32px;
  }
`

export const SocialContainer = styled.div`
  width: 88px;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
`
