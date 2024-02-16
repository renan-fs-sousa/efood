import styled from 'styled-components'
import { color } from '../../styles'

export const CardContainer = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 8px;
  background-color: ${color.orange};
`
export const CardMenuTop = styled.div`
  padding: 0px;
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
`
export const CardMenuBottom = styled.div`
  width: 100%;
  padding: 0px;
`
export const CardMenuP = styled.p`
  padding: 8px 0 8px 0;
  line-height: 22px;
  width: 304px;
  font-size: 14px;
  color: ${color.tagfontcolor};
`
export const CardContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardMenuH1 = styled.h1`
  padding: 8px 0 0 0;
  font-size: 16px;
  font-weight: 900;
  color: ${color.tagfontcolor};
`

export const CardButton = styled.button`
  padding: 4px 0px;
  background-color: ${color.tagfontcolor};
  color: ${color.orange};
  font-weight: 900;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
`
