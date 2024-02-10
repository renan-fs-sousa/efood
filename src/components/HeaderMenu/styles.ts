import styled from 'styled-components'
import { color } from '../../styles'
import hero from '../../assets/images/hero.png'
import banner from '../../images/banner-trattoria.png'

const HeaderMenu = styled.div`
  background-image: url(${hero});
  height: 384px;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 186px;
  img {
    display: block;
  }
`

export const HeaderCategory = styled.h1`
  font-weight: 900;
  width: 30%;
  text-align: left;
  font-size: 18px;
`
export const HeaderCart = styled.h1`
  font-weight: 900;
  width: 30%;
  text-align: right;
  font-size: 18px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  text-align: center;
`
export const HeaderContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`
export const HeaderBanner = styled.div`
  background-image: ${color.overlay}, url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  justify-content: center;
`
export const HeaderBannerContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  position: relative;
  text-align: center;
`

export const HeaderBannerCategory = styled.p`
  top: 24px;
  width: 1024px;
  background-color: transparent;
  color: ${color.white};
  font-weight: 100;
  font-size: 32px;
  text-align: left;
  position: absolute;
`
export const HeaderBannerTitle = styled.h1`
  bottom: 32px;
  background-color: transparent;
  color: ${color.white};
  font-weight: 900;
  font-size: 32px;
  text-align: left;
  position: absolute;
`
export default HeaderMenu