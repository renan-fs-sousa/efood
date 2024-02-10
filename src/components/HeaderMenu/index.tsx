import HeaderHero, {
  HeaderCategory,
  HeaderContainer,
  HeaderCart,
  HeaderContainerLogo
} from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderHero>
    <HeaderContainer>
      <HeaderCategory>Restaurantes</HeaderCategory>

      <HeaderContainerLogo>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
      </HeaderContainerLogo>

      <HeaderCart>0 produto(s) no carrinho</HeaderCart>
    </HeaderContainer>
  </HeaderHero>
)

export default Header
