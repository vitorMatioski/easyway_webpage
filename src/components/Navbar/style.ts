import styled from 'styled-components'

export const NavLinksContent = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style: none;

  li {
    margin-top: 2rem;
    padding-left: 2rem;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme['white-tx']};
  }

  a:hover {
    border-bottom: 2px solid ${(props) => props.theme['yellow-100']};
  }

  .content_logo {
    img {
      width: 50px;
      height: 50px;
      margin-top: 1rem;
    }
  }

  .contant_contact {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 8rem;
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 450px;
    background-color: ${(props) => props.theme['gray-400']};
    border-bottom: 3px solid ${(props) => props.theme['yellow-100']};
    z-index: 1;

    li {
      padding-left: 10%;
    }

    .content_logo {
      img {
        display: none;
      }
    }

    .contant_contact {
      display: none;
    }
  }
`
export const NavBarContent = styled.header``

export const DesktopNavigationContent = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme['gray-400']};
  border-bottom: 2px solid ${(props) => props.theme['yellow-100']};
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: space-around;
  justify-content: center;

  @media (max-width: 990px) {
    display: none;
  }
`

export const MobileNavigationContent = styled.nav`
  display: none;

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.theme['gray-400']};
    border-bottom: 1px solid ${(props) => props.theme['yellow-100']};

    .hamburger {
      color: ${(props) => props.theme['white-tx']};
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme['gray-400']};
      position: absolute;
      left: 2%;
      cursor: pointer;
    }
  }
`
