import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defauls'
import { GlobalStyle } from './styles/global'
import { Home } from './screens/Home'
import { Developer } from './screens/PagesJob/Developer'
import { PaidTraffic } from './screens/PagesJob/Traffic'
import { SocialMidia } from './screens/PagesJob/SocialMidia'
import { Yoda } from './screens/EasterEgg/EasterEgg'
import { NavBar } from './components/Navbar/NavBar'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/paidTraffic" element={<PaidTraffic />} />
            <Route path="/socialMidia" element={<SocialMidia />} />
            <Route path="/yoda" element={<Yoda />} />
          </Routes>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}
