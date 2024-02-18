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

    height: 175px;
    object-fit: cover;
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  background-color: ${color.orange};
  color: ${color.white};
  padding: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin: 0 24px 0 0;
  }
  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    margin: 0;
  }
`
export const InfosContainer = styled.div`
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  img {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
  p {
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 16px;
  }
  ${CardButton} {
    height: 24px;
    width: 218px;
  }
`
