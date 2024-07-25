import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  amarelo: '#fec900',
  laranja: '#ffa800',
  laranja_pastel: '#fcc04d',
  laranja_claro: '#ffc85f',
  cinza: '#2c2a2b',
  cinza_claro: '#666666',
  branco: '#FFFFFF',
  preto: '#000000',
}

export const fontes = {
  padrao: 'Roboto, sans-serif',
  destaque: 'Merriweather, serif',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: "Merriweather", serif; */
        font-family: "Roboto", sans-serif;
    }

    body {
      color: ${cores.preto};
        /* background-color: ${cores.amarelo};
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, ${cores.amarelo} 10px ), repeating-linear-gradient( #ffa80055, ${cores.laranja} );
        background-position: 0 0; */
    }
`

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const ContainerMd = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
