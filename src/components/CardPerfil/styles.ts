import styled from 'styled-components'

export const ContainerCard = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1440px) {
    height: 70%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 80%;
  }

  @media (max-width: 480px) {
    height: 100%;
  }

  @media screen and (max-width: 480px), screen and (max-height: 580px) {
    margin-top: 8rem;
  }
`

export const Cards = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${(props) => props.theme['yellow-100']};
  -webkit-box-shadow: -12px 21px 33px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -12px 21px 33px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -12px 21px 33px -7px rgba(0, 0, 0, 0.75);
  margin-top: 3rem;

  .flex {
    display: flex;
  }

  .contenair_information {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .image_perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 3rem;
  }

  .image_perfil img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
  }

  .id_name {
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme['black-100']};
    padding-top: 3rem;

    h2 {
      font-size: 1rem;
      padding-top: 0.5rem;
    }
  }

  .container_icon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    a {
      margin: 1rem 1rem;
    }
  }

  @media (max-width: 1440px) {
    width: 700px;
    height: 400px;

    .image_perfil img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 1440px) {
    height: 600px;
  }

  @media (max-width: 1360px) {
    width: 650px;
    height: 400px;

    .contenair_information {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .image_perfil {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 1rem;
    }

    .image_perfil img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      -webkit-box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
      box-shadow: -4px 7px 19px 0px rgba(0, 0, 0, 0.75);
    }

    .id_name {
      text-align: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      color: ${(props) => props.theme['black-100']};
      padding-top: 3rem;

      h2 {
        font-size: 1rem;
        padding-top: 0.5rem;
      }
    }

    .container_icon {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;

      a {
        margin: 1rem 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 700px;
    height: 500px;

    .image_perfil {
      padding-top: 2rem;
    }

    .container_icon {
      padding-top: 2rem;
    }
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 450px;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    .image_perfil {
      padding-top: 0.5rem;
      padding-right: 0rem;
    }

    .image_perfil img {
      width: 150px;
      height: 150px;
    }

    .id_name {
      font-size: 0.875rem;
      padding-top: 0.5rem;

      h2 {
        font-size: 0.75rem;
        padding-top: 0.5rem;
      }
    }

    .container_icon {
      padding-top: 1rem;
    }
  }
`
