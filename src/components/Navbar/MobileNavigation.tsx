import { useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

import { NavLinks } from './NavLinks'
import { MobileNavigationContent } from './style'

export function MobileNavigation() {
  const [openMenu, setOpenMenu] = useState(false)

  const HamburgerIcon = (
    <FiMenu className="hamburger" onClick={() => setOpenMenu(!openMenu)} />
  )

  const CloseIcon = (
    <MdClose className="hamburger" onClick={() => setOpenMenu(!openMenu)} />
  )

  const closeMobileMenu = () => setOpenMenu(false)

  return (
    <MobileNavigationContent>
      {openMenu ? CloseIcon : HamburgerIcon}
      {openMenu && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </MobileNavigationContent>
  )
}
