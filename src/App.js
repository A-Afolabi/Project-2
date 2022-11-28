import React from 'react'
//Way to navigate around in react without page rerendering.
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components for each page
import Home from './components/Home'
import SiteNarbar from './components/SiteNavbar'
import Leagues from './components/leagues/Leagues'
// import Standings from './components/leagues/Standings'
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
          <Route path="Leagues" element={<Leagues />} />
          <Route path="Leagues/:leagueId" element={<Seasons />} />
          {/* <Route path="Leagues/:leagueId/standings" element={<Standings />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App