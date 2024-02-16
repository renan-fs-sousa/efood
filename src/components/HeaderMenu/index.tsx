import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
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
)

export default Header
