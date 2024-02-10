import Header from '../../components/Header'
import ListCardHome from '../../components/Cards'
import Restaurant from '../../models/Restaurant'

import sushi from '../../images/sushi.png'
import trattoria from '../../images/trattoria.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushi,
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.\nExperimente o Japão sem sair do lar com nosso delivery!',
    rate: '4.9',
    category: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: trattoria,
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    category: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    image: trattoria,
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    category: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: trattoria,
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    category: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    image: trattoria,
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    category: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    image: trattoria,
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    category: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <ListCardHome restaurants={restaurants} />
  </>
)

export default Home
