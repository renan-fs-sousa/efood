import HeaderHero, { HeaderTitle, HeaderContainer } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderHero>
    <HeaderContainer>
      <img src={logo} alt="Efood" />
      <HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTitle>
    </HeaderContainer>
  </HeaderHero>
)

export default Header
