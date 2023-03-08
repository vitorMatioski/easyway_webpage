import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
import { NavBarContent } from './style'

export function NavBar() {
  return (
    <NavBarContent>
      <DesktopNavigation />
      <MobileNavigation />
    </NavBarContent>
  )
}
