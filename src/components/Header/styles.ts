import styled from 'styled-components'

import hero from '../../assets/images/hero.png'

const HeaderHero = styled.div`
  background-image: url(${hero});
  height: 384px;
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    margin-top: 64px;
    cursor: pointer;
  }
`

export const HeaderTitle = styled.h1`
  max-width: 540px;
  font-weight: 900;
  width: 100%;
  margin-bottom: 40px;
  font-size: 36px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 384px;
`

export default HeaderHero
