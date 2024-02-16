import * as S from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.HeaderHero>
    <S.HeaderContainer>
      <img src={logo} alt="Efood" />
      <S.HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeaderTitle>
    </S.HeaderContainer>
  </S.HeaderHero>
)

export default Header
