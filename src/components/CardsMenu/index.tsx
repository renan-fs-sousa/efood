import Menu from '../Menu'
import CardList, { CardGrid } from './styles'

import MenuProducts from '../../models/Menu'

type Props = {
  products: MenuProducts[]
}

const ListCardMenu = ({ products }: Props) => (
  <CardList>
    <CardGrid>
      {products.map((product) => (
        <Menu
          key={product.id}
          title={product.title}
          image={product.image}
          text={product.text}
        ></Menu>
      ))}
    </CardGrid>
  </CardList>
)

export default ListCardMenu
