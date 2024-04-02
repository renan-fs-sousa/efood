import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import { useGetBannerQuery } from '../../services/api'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

// const { id } = useParams()
// const [restaurants, setRestaurant] = useState<Restaurants>()

// useEffect(() => {
//   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//     .then((res) => res.json())
//     .then((res) => setRestaurant(res))
// }, [id])

const Header = () => {
  const { id } = useParams()
  const { data: restaurants } = useGetBannerQuery(id!)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderHero>
        <S.HeaderContainer>
          <S.HeaderCategory>Restaurantes</S.HeaderCategory>
          <S.HeaderContainerLogo>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
          </S.HeaderContainerLogo>
          <S.HeaderCart onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.HeaderCart>
        </S.HeaderContainer>
      </S.HeaderHero>
      <S.HeaderBanner style={{ backgroundImage: `url(${restaurants?.capa})` }}>
        <S.HeaderBannerContainer>
          <S.HeaderBannerCategory>{restaurants?.tipo}</S.HeaderBannerCategory>
          <S.HeaderBannerTitle>{restaurants?.titulo}</S.HeaderBannerTitle>
        </S.HeaderBannerContainer>
      </S.HeaderBanner>
    </>
  )
}

export default Header
