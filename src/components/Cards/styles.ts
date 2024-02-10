import styled from 'styled-components'

const CardList = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 46px 80px;
`

export default CardList
