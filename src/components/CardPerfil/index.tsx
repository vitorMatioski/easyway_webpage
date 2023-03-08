import { Cards, ContainerCard } from './styles'

import { BsInstagram, BsLinkedin } from 'react-icons/bs'

import rafael from '../../assets/imagePerfilRafael.png'
import vitor from '../../assets/imagePerfilVitor.png'

import { Button } from '../Button'

export function CardPerfil() {
  return (
    <ContainerCard>
      <Cards>
        <div className="image_perfil flex">
          <img src={rafael} alt="" />
        </div>
        <div className="contenair_information flex">
          <div className="id_name">
            <h1>Rafael L. Fernandes</h1>
            <h2>Desenvolvedor Web & Produtos audio Visual</h2>
          </div>
          <div className="container_icon">
            <a
              href="https://www.linkedin.com/in/rafael-leite-fernandes-583419234/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="#0e76a8" size={40} />
            </a>
            <a
              href="https://www.instagram.com/rafaelleitef/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram color="#833AB4" size={40} />
            </a>
          </div>
          <Button link="https://rafaelleite.dev.br/" text="my portfolio" />
        </div>
      </Cards>
      <Cards>
        <div className="image_perfil flex">
          <img src={vitor} alt="" />
        </div>
        <div className="contenair_information flex">
          <div className="id_name">
            <h1>Vitor M. Matioski</h1>
            <h2>Desenvolvedor FullStack</h2>
          </div>
          <div className="container_icon">
            <a
              href="https://www.linkedin.com/in/vitor-matheus-matioski/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="#0e76a8" size={40} />
            </a>
            <a
              href="https://www.instagram.com/vitormatioski/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram color="#833AB4" size={40} />
            </a>
          </div>
          <Button link="https://vitormatioski.dev.br/" text="my portfolio" />
        </div>
      </Cards>
    </ContainerCard>
  )
}
