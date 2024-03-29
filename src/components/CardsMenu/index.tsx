import Menu from '../Menu'
import CardList, { CardGrid } from './styles'

import { MenuProducts } from '../../pages/Menu'

export type Props = {
  products: MenuProducts[]
}

const ListCardMenu = ({ products }: Props) => (
  <CardList>
    <CardGrid>
      {products.map((product) => (
        <Menu
          key={product.id}
          id={product.id}
          nome={product.nome}
          foto={product.foto}
          descricao={product.descricao}
          preco={product.preco}
          porcao={product.porcao}
        ></Menu>
      ))}
    </CardGrid>
  </CardList>
)

export default ListCardMenu
