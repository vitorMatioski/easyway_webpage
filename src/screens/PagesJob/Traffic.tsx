import { ContentText } from '../PagesJob/style'

import { BsLayoutWtf } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { TbMailFast } from 'react-icons/tb'
import { AiOutlineLayout, AiFillYoutube } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { MdOutlinePaid } from 'react-icons/md'

export function PaidTraffic() {
  return (
    <ContentText>
      <div className="parent flex">
        <div className="container_content flex">
          <h1>tráfego pago</h1>
          <div className="container flex">
            <div className="_content_row flex">
              <div className="flex flex_row">
                <BsLayoutWtf />
                <h2>Atraia Mais Clientes</h2>
                <p>
                  Alavanque suas vendas/publicações através do Facebook ADS.
                  Apareça para seus possíveis clientes.
                </p>
              </div>
              <div className="flex flex_row">
                <HiUserGroup />
                <h2>Campanhas Personalizadas</h2>
                <p>
                  Utilizamos estratégias personalizadas para alcançar o público
                  ideal para o seu produto ou serviço, utilizando método de
                  direcionamento detalhado.
                </p>
              </div>
              <div className="flex flex_row">
                <TbMailFast />
                <h2>O Público Correto</h2>
                <p>
                  Você será encontrado por quem estiver realmente interessado em
                  seu produto ou serviço.
                </p>
              </div>
            </div>
            <div className="_content_row flex">
              <div className="flex flex_row">
                <AiOutlineLayout />
                <h2>Otimização Constante</h2>
                <p>
                  Contamos com uma equipe qualificada que irá fazer otimizações
                  constantes em suas campanhas e acompanhá-las para possíveis
                  mudanças.
                </p>
              </div>
              <div className="flex flex_row">
                <BiSupport />
                <h2>Relatórios</h2>
                <p>
                  Entregamos relatórios detalhados, fornecendo informações
                  valiosas sobre o seu negócio e o seu público.
                </p>
              </div>
              <div className="flex flex_row">
                <MdOutlinePaid size={100} color="white" />
                <h2>Escale Seu Negócio</h2>
                <p>
                  Através das métricas, você poderá escalar o seu negócio com
                  muito mais facilidade, aumentando ainda mais o faturamento do
                  seu negócio.
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
