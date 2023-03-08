import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import santaHelena from '../../assets/ClientImagens/santaHelena.png'
import alvor from '../../assets/ClientImagens/alvor.png'
import vfhair from '../../assets/ClientImagens/vfhair.svg'
import { ContainerSlider } from './style'

export function SliderClient() {
  return (
    <ContainerSlider>
      <h1>Nossos Clientes</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <img src={alvor} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vfhair} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={santaHelena} alt="" />
        </SwiperSlide>
      </Swiper>
    </ContainerSlider>
  )
}
