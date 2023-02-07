import React from 'react'
import { Link } from 'react-router-dom'

import disneyLogo from './assets/disneyLogo.png'

const Home = () => (
  <>
    <div className="logo text-center">
      <div className="logo-overlay">
        <div className="dis-logo">
          <img src={disneyLogo} alt="Disney" />
        </div>
      </div>
    </div>
    <h3 className="lead text-center">
      Find out more about your favourite Disney characters.
    </h3>
    <p className="p-tag text-center">
      You may discover something new to watch on Disney+
    </p>
    <div className="home-btn">
      <Link to="Characters" className="btn">Find Character</Link>
    </div>
  </>
)

export default Home