import styled from 'styled-components'

import FundoUltraWide from '../../assets/backgroundImagens/BackgroundHome_ultrawide.jpg'
import Fundo from '../../assets/backgroundImagens/BackgroundHome.jpg'
import FundoMobile from '../../assets/backgroundImagens/BackgroundMobileHome.png'

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
`

export const BannerBrand = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url(${FundoUltraWide});
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  .principal_media {
    margin-top: 26rem;
    margin-left: 20rem;
    svg {
      width: 60px;
      height: 60px;
      color: ${(props) => props.theme['yellow-50']};
      margin: 0 1.5rem;
    }
  }

  @media (max-width: 1440px) {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    background-image: url(${Fundo});

    .principal_media {
      margin-top: 16rem;
      margin-left: 8rem;
    }
  }

  @media (max-width: 1360px) {
    height: 100vh;

    .principal_media {
      margin-top: 19rem;
      margin-left: 8rem;
    }
  }

  @media (max-width: 490px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url(${FundoMobile});

    .principal_media {
      margin-left: 8rem;
      margin-bottom: 50rem;
    }
  }

  @media screen and (max-width: 480px), screen and (max-height: 580px) {
    .principal_media {
      margin-left: 8rem;
      margin-bottom: 40rem;
    }
  }
`
