import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { color } from '../../styles'
import { Props } from './index'

export const ButtonContainer = styled.button<Props>`
  background-color: ${color.tagfontcolor};
  color: ${color.orange};
  font-size: 14px;
  font-weight: 700;
  border: none;
  text-align: center;
  width: ${(props) => (props.size === 'big' ? '100%' : '304px')};
  padding: ${(props) => (props.size === 'big' ? '4px 0' : '4px 6px')};
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${color.orange};
  color: ${color.tagfontcolor};
  font-size: 14px;
  font-weight: 700;
  border: none;
  text-decoration: none;
  cursor: pointer;
`
