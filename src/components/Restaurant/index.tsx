import { Link } from 'react-router-dom'
import star from '../../assets/images/star.svg'

import * as S from './styles'

type Props = {
  title: string
  image: string
  text: string
  rate: string
  category: string
  destacado: boolean
  id: number
}

const Restaurant = ({
  title,
  image,
  text,
  rate,
  category,
  destacado,
  id
}: Props) => (
  <S.CardContainer>
    <S.CardHomeTop>
      <img src={image} alt="" />
      <S.ContainerTag>
        {destacado === true ? <S.Tag>Destaque da semana</S.Tag> : null}
        <S.Tag>{category}</S.Tag>
      </S.ContainerTag>
    </S.CardHomeTop>
    <S.CardHomeBottom>
      <S.CardContainerTitle>
        <S.CardHomeH1>{title}</S.CardHomeH1>
        <S.CardHomeRate>
          {rate} <img src={star} />
        </S.CardHomeRate>
      </S.CardContainerTitle>
      <S.CardHomeP>{text}</S.CardHomeP>
      <Link to={`/menu/${id}`}>
        <S.CardButton>Saiba mais</S.CardButton>
      </Link>
    </S.CardHomeBottom>
  </S.CardContainer>
)

export default Restaurant
