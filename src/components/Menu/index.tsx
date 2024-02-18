import * as S from './styles'
import { useState } from 'react'
import close from '../../assets/images/close.svg'

type Props = {
  id: number
  title: string
  image: string
  text: string
  preco: number
  porcao: string
}

type ModalState = {
  isVisible: boolean
}

const formatPrice = (preco = 0) => {
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

const Menu = ({ title, image, text, preco, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <S.CardContainer>
      <S.CardMenuTop>
        <img src={image} alt="" />
      </S.CardMenuTop>
      <S.CardMenuBottom>
        <S.CardContainerTitle>
          <S.CardMenuH1>{title}</S.CardMenuH1>
        </S.CardContainerTitle>
        <S.CardMenuP>{truncateDescription(text)}</S.CardMenuP>
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
                src={image}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <S.InfosContainer>
              <h4>{title}</h4>
              <p>{text}</p>
              <p>Serve de {porcao}</p>
              <S.CardButton>
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
