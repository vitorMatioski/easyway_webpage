import styled from 'styled-components'

// import FundoUltraWide from '../../assets/backgroundImagens/BackgroundUltrawideSec.png'
// import Fundo from '../../assets/backgroundImagens/BackgroundSec.png'

export const ContentText = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  width: 100%;
  height: 100vh;
  padding-top: 150px;

  .flex {
    display: flex;
  }

  .flex_row {
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .parent {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container_content {
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-50']};
      margin-top: 1rem;
    }

    .container {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h2 {
      font-weight: 900;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
      color: ${(props) => props.theme['yellow-100']};
      margin-bottom: 0.5rem;
    }

    p {
      text-align: center;
      color: ${(props) => props.theme['white-tx']};
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6;
    }

    svg {
      align-items: center;
      width: 60px;
      height: 60px;
      color: ${(props) => props.theme['white-tx']};
    }

    ._content_row {
      flex-direction: row;
    }
  }

  .container {
    margin-top: 2rem;

    .btn {
      display: block;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme['white-tx']};
      padding: 13px 53px;
      border: 2px solid #ff0000;
      border-radius: 8px;
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 110%;
        height: 0;
        background-color: #ff0000;
        z-index: -1;
        transition: 0.7s ease;
      }

      &:hover {
        transform: scale(1.2);
        &::before {
          height: 580%;
        }
      }

      svg {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
        vertical-align: middle;
      }
    }
  }

  @media (max-width: 1024px) {
    padding-top: 100px;

    .div1 {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    padding-top: 30px;
  }

  @media (max-width: 480px) {
    .flex_row {
      width: 100%;
      flex-direction: column;
    }

    .parent {
      flex-direction: column;
    }

    .container_content {
      width: 95%;

      h1 {
        font-size: 2rem;
      }

      .container {
        width: 95%;
        flex-direction: row;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        width: 80%;
        font-size: 0.75rem;
      }

      svg {
        width: 50px;
        height: 50px;
      }

      ._content_row {
        flex-direction: column;
      }

      ._content_row:first-child {
        border-right: 1px solid ${(props) => props.theme['yellow-100']};
      }
    }
  }
`
