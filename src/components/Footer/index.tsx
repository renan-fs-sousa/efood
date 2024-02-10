import FooterContainer, {
  FooterText,
  FooterBox,
  SocialContainer
} from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <FooterBox>
      <img src={logo} alt="Efood" />
      <SocialContainer>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </SocialContainer>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterBox>
  </FooterContainer>
)

export default Footer
