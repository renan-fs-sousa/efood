import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

const CardList = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px 80px;
`

export const CardContainer = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${color.white};
`
export const CardHomeTop = styled.div`
  padding: 0px;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    display: block;
    max-height: 217px;
    object-fit: cover;
    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 20px;
      display: block;
      bottom: 3px;
      margin-top: 60px;
    }
  }
`
export const CardHomeBottom = styled.div`
  width: 100%;
  border: 1px solid ${color.orange};
  border-top: none;
  padding: 0px;
`
export const CardHomeP = styled.p`
  padding: 8px;
  line-height: 22px;
  height: 110px;
  margin-bottom: 8px;
  white-space: break-spaces;
  font-size: 14px;
`
export const CardContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardHomeH1 = styled.h1`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const CardHomeRate = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  img {
    padding: 8px;
  }
`

export const CardButton = styled.button`
  margin: 8px;
  padding: 4px 6px;
  background-color: ${color.orange};
  color: ${color.tagfontcolor};
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

export const ContainerTag = styled.div`
  margin: 16px;
  position: absolute;
  top: 0;
  right: 0;
`

export const Tag = styled.button`
  margin-left: 8px;
  padding: 4px 6px;
  background-color: ${color.orange};
  color: ${color.tagfontcolor};
  font-weight: bold;
  font-size: 12px;
  border: none;
`

export default CardList
