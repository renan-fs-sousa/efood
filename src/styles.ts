import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const color = {
  orange: '#E66767',
  black: '#000',
  white: '#FFFFFF',
  backgroundColor: '#FFF8F2',
  tagfontcolor: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${color.backgroundColor};
        color: ${color.orange};
    }
    `
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  text-align: center;
`
