import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'
import HeaderMenu from '../../components/HeaderMenu'
import ListCardMenu from '../../components/CardsMenu'

export type MenuProducts = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuProducts[]
}

const Menu = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <HeaderMenu />
        <ListCardMenu products={restaurant.cardapio} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Menu
