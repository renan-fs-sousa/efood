import Restaurant from '../Restaurant'
import CardList, { CardGrid } from './styles'

import { Restaurants } from '../../pages/Home'

export type Props = {
  restaurants: Restaurants[]
}

const ListCardHome = ({ restaurants }: Props) => (
  <CardList>
    <CardGrid>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.titulo}
          image={restaurant.capa}
          text={restaurant.descricao}
          rate={restaurant.avaliacao}
          category={restaurant.tipo}
          destacado={restaurant.destacado}
          id={restaurant.id}
        ></Restaurant>
      ))}
    </CardGrid>
  </CardList>
)

export default ListCardHome
