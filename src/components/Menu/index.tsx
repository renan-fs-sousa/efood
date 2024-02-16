import * as S from './styles'

type Props = {
  title: string
  image: string
  text: string
}

const Menu = ({ title, image, text }: Props) => (
  <S.CardContainer>
    <S.CardMenuTop>
      <img src={image} alt="" />
    </S.CardMenuTop>
    <S.CardMenuBottom>
      <S.CardContainerTitle>
        <S.CardMenuH1>{title}</S.CardMenuH1>
      </S.CardContainerTitle>
      <S.CardMenuP>{text}</S.CardMenuP>
      <S.CardButton>Adicionar ao carrinho</S.CardButton>
    </S.CardMenuBottom>
  </S.CardContainer>
)

export default Menu
