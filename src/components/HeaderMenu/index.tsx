import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { Restaurants } from '../../pages/Home'

const Header = () => {
  const { id } = useParams()
  const [restaurants, setRestaurant] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      <S.HeaderHero>
        <S.HeaderContainer>
          <S.HeaderCategory>Restaurantes</S.HeaderCategory>
          <S.HeaderContainerLogo>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
          </S.HeaderContainerLogo>
          <S.HeaderCart>0 produto(s) no carrinho</S.HeaderCart>
        </S.HeaderContainer>
      </S.HeaderHero>
      <S.HeaderBanner style={{ backgroundImage: `url(${restaurants?.capa})` }}>
        <S.HeaderBannerContainer>
          <S.HeaderBannerCategory>{restaurants?.tipo}</S.HeaderBannerCategory>
          <S.HeaderBannerTitle>{restaurants?.titulo}</S.HeaderBannerTitle>
        </S.HeaderBannerContainer>
      </S.HeaderBanner>
    </>
  )
}

export default Header
