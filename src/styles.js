import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  escrita_intenso: '#13293D',
  escrita_suave: '#006494',
  destaque_neutro: '#247ba0',
  destaque_intenso: '#1b98e0',
  cor_fundo: '#e8f1f2',
  branco: '#FFFFFF',
  preto: '#000000',
}

export const fontes = {
  padrao: 'Roboto, sans-serif',
  destaque: 'Roboto, sans-serif',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
      color: ${cores.escrita_intenso};
    }
`

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`
