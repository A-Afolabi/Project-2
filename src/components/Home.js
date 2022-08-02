import React from 'react'

const Home = () => (
  //The aligning and "darkmode" theme for text and screen.
  //'hero' part can be called anything, just so we can target it later when styling
  <div className="hero text-center">
    <div className='hero-overlay'>
      {/* size of text depending on size of the screen */}
      <h1 className="display-3">
        2020/21 League Standings
      </h1>
      <p className='lead'>Find out who became champions, who got relegated and more from a range of different leagues</p>
    </div>
  </div>
)

export default Home