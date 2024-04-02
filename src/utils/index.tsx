import { MenuProducts } from '../pages/Menu'

export const getTotalPrice = (items: MenuProducts[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}
