import React from 'react'
//Way to navigate around in react without page rerendering.
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components for each page
import Home from './components/Home'
import SiteNavbar from './components/SiteNavbar'
import Characters from './components/Characters'
import OneChar from './components/OneChar'

const App = () => {
  return (
    <div className="site-wrapper">
      {/* Linking all component pages with browser router */}
      <BrowserRouter>
        {/* SiteNavbar to navigate between links of different leagues. Therefore needs to be with BrowserRouter.*/}
        {/* This will be on every page and therefore does not need to sit within Routes */}
        <SiteNavbar />
        {/* Wrapping all our compnents that represent pages on a specific route inside, using Route */}
        <Routes>
          {/* First route will be Home page */}
          <Route path="/" element={<Home />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="Characters/:disneyId" element={<OneChar />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App