import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import close from '../../assets/images/close.svg'
import { MenuProducts } from '../../pages/Menu'
import { add, open } from '../../store/reducers/cart'

// type PratoProps = {
//   prato: MenuProducts
// }

type ModalState = {
  isVisible: boolean
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const truncateDescription = (text: string) => {
  const maxWords = 25
  const words = text.split(' ')

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'
  }
  return text
}

const Menu = ({ foto, nome, descricao, porcao, preco, id }: MenuProducts) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const product = {
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <S.CardContainer>
      <S.CardMenuTop>
        <img src={foto} alt="" />
      </S.CardMenuTop>
      <S.CardMenuBottom>
        <S.CardContainerTitle>
          <S.CardMenuH1>{nome}</S.CardMenuH1>
        </S.CardContainerTitle>
        <S.CardMenuP>{truncateDescription(descricao)}</S.CardMenuP>
        <S.CardButton
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          Adicionar ao carrinho
        </S.CardButton>

        <S.Modal className={modal.isVisible ? 'visivel' : ''}>
          <S.ModalContent className="container">
            <img
              src={close}
              alt="Botão de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img
                src={foto}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <S.InfosContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve de {porcao}</p>
              <S.CardButton onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(preco)}
              </S.CardButton>
            </S.InfosContainer>
          </S.ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </S.Modal>
      </S.CardMenuBottom>
    </S.CardContainer>
  )
}

export default Menu
