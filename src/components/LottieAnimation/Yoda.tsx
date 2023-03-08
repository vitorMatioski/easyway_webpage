import { useLottie } from 'lottie-react'
import yoda from '../../assets/LottieJSON/yoda.json'
import { ContainerAnimation } from './style'

export function Yoda() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: yoda,
  }

  const style = {
    width: 100,
    height: 100,
  }

  const { View } = useLottie(defaultOptions, style)
  return <ContainerAnimation>{View}</ContainerAnimation>
}
