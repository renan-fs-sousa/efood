import HeaderMenu from '../../components/HeaderMenu'
import ListCardMenu from '../../components/CardsMenu'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export type MenuProducts = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Menu = () => {
  const { id } = useParams()
  const [products, SetProducts] = useState<MenuProducts[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => SetProducts(res.cardapio))
  }, [id])

  return (
    <>
      <HeaderMenu />
      {products && <ListCardMenu products={products} />}
      {!products && <h3>Carregando...</h3>}
    </>
  )
}

export default Menu
