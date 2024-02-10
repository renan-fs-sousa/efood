import Restaurant from '../Restaurant'
import CardList, { CardGrid } from './styles'

import Restaurants from '../../models/Restaurant'

type Props = {
  restaurants: Restaurants[]
}

const ListCardHome = ({ restaurants }: Props) => (
  <CardList>
    <CardGrid>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.title}
          image={restaurant.image}
          text={restaurant.text}
          rate={restaurant.rate}
          category={restaurant.category}
        ></Restaurant>
      ))}
    </CardGrid>
  </CardList>
)

export default ListCardHome
