import styled from 'styled-components'
import { color } from '../../styles'
//import { TagContainer } from '../Tag/styles'

import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${color.orange};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${color.tagfontcolor};
    text-align: center;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${color.tagfontcolor};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${color.orange};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  span {
    font-size: 14px;
    display: block;
  }
`

export const ValorTotal = styled.div`
  margin: 40px 0 16px;
  color: ${color.tagfontcolor};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`

export const ButtonContinuar = styled.button`
  border: none;
  background-color: ${color.tagfontcolor};
  color: ${color.orange};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
`
