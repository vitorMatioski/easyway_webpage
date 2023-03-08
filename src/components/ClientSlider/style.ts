import styled from 'styled-components'

export const ContainerSlider = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem 0;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${(props) => props.theme['white-tx']};
  }

  .swiper {
    width: 50%;
    height: 100%;
  }

  .swiper-slide {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }

    .swiper-slide {
      width: 70%;
    }
  }

  @media screen and (max-width: 480px), screen and (max-height: 580px) {
    margin: 8rem 0;
  }
`
