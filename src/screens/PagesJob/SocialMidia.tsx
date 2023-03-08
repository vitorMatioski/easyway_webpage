import { ContentText } from '../PagesJob/style'
// import ReactPlayer from 'react-player'

import { BsLayoutWtf } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { TbMailFast } from 'react-icons/tb'
import { AiOutlineLayout, AiFillYoutube } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { MdOutlinePaid } from 'react-icons/md'

export function SocialMidia() {
  return (
    <ContentText>
      <div className="parent flex">
        <div className="container_content flex">
          <h1>Social Media</h1>
          <div className="container flex">
            <div className="_content_row flex">
              <div className="flex flex_row">
                <BsLayoutWtf />
                <h2>Planejamento Estratégico</h2>
                <p>
                  Criamos um planejamento para suas redes sociais com criação e
                  agendamento de posts, análise de alcance e melhora de
                  engajamento.
                </p>
              </div>
              <div className="flex flex_row">
                <HiUserGroup />
                <h2>Definição de Palheta de cor e Posts</h2>
                <p>
                  Definimos cores para sua marca ou para suas publicações,
                  mantendo uma grade de perfil ou página muito mais
                  profissional.
                </p>
              </div>
              <div className="flex flex_row">
                <TbMailFast />
                <h2>Criação de vídeos</h2>
                <p>
                  Fazemos produções e edições de vídeos. Contamos também com
                  profissionais especializados em VFX (Efeitos especiais) para
                  seus vídeos.
                </p>
              </div>
            </div>
            <div className="_content_row flex">
              <div className="flex flex_row">
                <AiOutlineLayout />
                <h2>Criação de imagens</h2>
                <p>
                  Produzimos banners, cartões de visita, stories e templates.
                  Para que seu perfil nas redes sociais tenham uma melhor
                  visibilidade para o público alvo.
                </p>
              </div>
              <div className="flex flex_row">
                <BiSupport />
                <h2>Visibilidade</h2>
                <p>
                  Sua marca com muito mais visibilidade e profissionalismo, com
                  a junção do tráfego pago seus anúncios serão muito mais
                  reconhecidos.
                </p>
              </div>
              <div className="flex flex_row">
                <MdOutlinePaid size={100} color="white" />
                <h2>Suporte Contínuo</h2>
                <p>
                  Conte com o nosso time para oferecer suporte às suas
                  necessidades. Tudo isso feito sob-demanda, quando necessário.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex">
          <a
            href="https://www.youtube.com/@easywaydevs"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <AiFillYoutube />
            Saiba Mais
          </a>
        </div>
      </div>
    </ContentText>
  )
}
