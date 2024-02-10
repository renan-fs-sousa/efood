import { Link } from 'react-router-dom'
import star from '../../assets/images/star.svg'

import {
  CardButton,
  CardContainer,
  CardHomeBottom,
  CardHomeTop,
  CardHomeP,
  CardHomeH1,
  CardContainerTitle,
  CardHomeRate,
  Tag,
  ContainerTag
} from './styles'

type Props = {
  title: string
  image: string
  text: string
  rate: string
  category: string[]
}

const Restaurant = ({ title, image, text, rate, category }: Props) => (
  <CardContainer>
    <CardHomeTop>
      <img src={image} alt="" />
      <ContainerTag>
        {category.map((categ) => (
          <Tag key={categ}>{categ}</Tag>
        ))}
      </ContainerTag>
    </CardHomeTop>
    <CardHomeBottom>
      <CardContainerTitle>
        <CardHomeH1>{title}</CardHomeH1>
        <CardHomeRate>
          {rate} <img src={star} />
        </CardHomeRate>
      </CardContainerTitle>
      <CardHomeP>{text}</CardHomeP>
      <Link to="/menu">
        <CardButton>Saiba mais</CardButton>
      </Link>
    </CardHomeBottom>
  </CardContainer>
)

export default Restaurant
