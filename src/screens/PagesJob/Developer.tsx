import { ContentText } from '../PagesJob/style'

import { BsLayoutWtf } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { TbMailFast } from 'react-icons/tb'
import { AiOutlineLayout, AiFillYoutube } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { MdOutlinePaid } from 'react-icons/md'

export function Developer() {
  return (
    <ContentText>
      <div className="parent flex">
        <div className="container_content flex">
          <h1>Desenvolvimento Web</h1>
          <div className="container flex">
            <div className="_content_row flex">
              <div className="flex flex_row">
                <BsLayoutWtf />
                <h2>Sites Responsivos</h2>
                <p>
                  Sites que se adaptam perfeitamente ao tamanho da tela do
                  computador, celular ou tablet.
                </p>
              </div>
              <div className="flex flex_row">
                <HiUserGroup />
                <h2>Experiência do Usuário</h2>
                <p>
                  Estratégias de Design focadas em melhorar a experiência do
                  usuário, aprimorar a usabilidade bem como a acessibilidade de
                  navegação e a utilização de conversões web atualizadas.
                </p>
              </div>
              <div className=" flex flex_row">
                <TbMailFast />
                <h2>Páginas Otimizadas</h2>
                <p>
                  Carregamento das páginas de forma rápida para aumentar o
                  número de conversões, através de otimização e servidor de alta
                  performance.
                </p>
              </div>
            </div>
            <div className="_content_row flex">
              <div className=" flex flex_row">
                <AiOutlineLayout />
                <h2>Layout Personalizado</h2>
                <p>
                  O layout é exclusivo e desenvolvido por especialistas. Formas,
                  cores, imagense e ícones. Tudo isso é desenvolvido pensando no
                  melhor desenpenho, design e acessibilidade, especialmente para
                  você.
                </p>
              </div>
              <div className=" flex flex_row">
                <BiSupport />
                <h2>Suporte Contínuo</h2>
                <p>
                  Conte com o nosso time para oferecer suporte às suas
                  necessidades. Tudo isso feito sob-demanda, quando necessário.
                </p>
              </div>
              <div className=" flex flex_row">
                <MdOutlinePaid size={100} color="white" />
                <h2>Integração</h2>
                <p>
                  Integramos com os principais APIs do mercado, sistemas e
                  plataformas de pagamentos digitas, para automatizar seus
                  processos e economizar tempo no fluxo de trabalho.
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
