import styled from 'styled-components'

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  .btn {
    display: block;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['white-tx']};
    padding: 13px 53px;
    border: 2px solid ${(props) => props.theme['gray-400']};
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
      background-color: ${(props) => props.theme['gray-400']};
      z-index: -1;
      transition: 0.7s ease;
    }

    &:hover {
      transform: scale(1.2);
      &::before {
        height: 580%;
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 0.5rem;

    button {
      width: 180px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    padding-top: 0.5rem;

    .btn {
      font-size: 0.75rem;
      padding: 13px 33px;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 110%;
        height: 0;
        background-color: ${(props) => props.theme['gray-400']};
        z-index: -1;
        transition: 0.7s ease;
      }

      &:hover {
        transform: scale(1.2);
        &::before {
          height: 580%;
        }
      }
    }
  }
`
