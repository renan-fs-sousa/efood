import HeaderMenu from '../../components/HeaderMenu'
import ListCardMenu from '../../components/CardsMenu'
import MenuProducts from '../../models/Menu'

import pizza from '../../images/pizza.png'
import {
  HeaderBanner,
  HeaderBannerCategory,
  HeaderBannerContainer,
  HeaderBannerTitle
} from '../../components/HeaderMenu/styles'

const menuProducts: MenuProducts[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    image: pizza,
    text: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Menu = () => (
  <>
    <HeaderMenu />
    <HeaderBanner>
      <HeaderBannerContainer>
        <HeaderBannerCategory>Italiana</HeaderBannerCategory>
        <HeaderBannerTitle>La Dolce Vita Trattoria</HeaderBannerTitle>
      </HeaderBannerContainer>
    </HeaderBanner>
    <ListCardMenu products={menuProducts} />
  </>
)

export default Menu
