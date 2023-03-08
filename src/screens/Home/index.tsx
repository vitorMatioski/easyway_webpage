import { BannerBrand, ContainerHome } from './styles'
import { CardPerfil } from '../../components/CardPerfil'

import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { SliderClient } from '../../components/ClientSlider'

export function Home() {
  return (
    <ContainerHome>
      <BannerBrand>
        <div className="principal_media">
          <a
            href="https://www.instagram.com/ewaydev/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMDB4WlsYz5mdf-t1qBDyMQ"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
        </div>
      </BannerBrand>
      <CardPerfil />
      <SliderClient />
    </ContainerHome>
  )
}
