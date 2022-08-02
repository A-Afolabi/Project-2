import React from 'react'
//Way to navigate around in react without page rerendering.
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components for each page
import Home from './components/Home'
import EPL from './components/EPL'
import SiteNarbar from './components/SiteNavbar'
import LaLiga from './components/LaLiga'
import MoreLeagues from './components/leagues/MoreLeagues'
import Tables from './components/leagues/Tables'
import Seasons from './components/leagues/Seasons'

const App = () => {
  return (
    <div className="site-wrapper">
      {/* Linking all component pages with browser router */}
      <BrowserRouter>
        {/* SiteNavbar to navigate between links of different leagues. Therefore needs to be with BrowserRouter.*/}
        {/* This will be on every page and therefore does not need to sit within Routes */}
        <SiteNarbar />
        {/* Wrapping all our compnents that represent pages on a specific route inside, using Route */}
        <Routes>
          {/* First route will be Home page */}
          <Route path="/" element={<Home />} />
          {/* following pages for each league */}
          <Route path="EPL" element={<EPL />} />
          <Route path="LaLiga" element={<LaLiga />} />
          <Route path="MoreLeagues" element={<MoreLeagues />} />
          <Route path="leagues/:leagueId" element={<Seasons />} />
          <Route path="leagues/:leagueId/standings" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App