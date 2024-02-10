import styled from 'styled-components'

const CardList = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`

export default CardList
