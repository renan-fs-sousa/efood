import {
  CardButton,
  CardContainer,
  CardMenuBottom,
  CardMenuTop,
  CardMenuP,
  CardMenuH1,
  CardContainerTitle
} from './styles'

type Props = {
  title: string
  image: string
  text: string
}

const Menu = ({ title, image, text }: Props) => (
  <CardContainer>
    <CardMenuTop>
      <img src={image} alt="" />
    </CardMenuTop>
    <CardMenuBottom>
      <CardContainerTitle>
        <CardMenuH1>{title}</CardMenuH1>
      </CardContainerTitle>
      <CardMenuP>{text}</CardMenuP>
      <CardButton>Adicionar ao carrinho</CardButton>
    </CardMenuBottom>
  </CardContainer>
)

export default Menu
