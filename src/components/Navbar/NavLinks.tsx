import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { BsWhatsapp } from 'react-icons/bs'
// import { SiGmail } from 'react-icons/si'
// import { AiOutlineClose } from 'react-icons/ai'

import { Yoda } from '../LottieAnimation/Yoda'
import { NavLinksContent } from './style'

// import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logoNavigation.png'

export function NavLinks(props: any) {
  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }
  return (
    <NavLinksContent>
      <div className="content_logo">
        <img src={logo} alt="" />
      </div>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/yoda">
          <Yoda />
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/">Home</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/developer">Web Developer</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/paidTraffic">Trafego Pago</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="socialMidia">Social Midia</Link>
      </motion.li>
      <div className="contant_contact">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a
            href="https://api.whatsapp.com/send?phone=5547988059087"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={23} color="white" />
          </a>
        </motion.li>
      </div>
    </NavLinksContent>
  )
}
