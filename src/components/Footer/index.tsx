import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <S.FooterBox>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <S.SocialContainer>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </S.SocialContainer>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </S.FooterBox>
  </S.FooterContainer>
)

export default Footer
