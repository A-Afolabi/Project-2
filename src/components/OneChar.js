import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import disneyLogo from './assets/disneyLogo.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const OneChar = () => {
  const [char, setChar] = useState(null)

  const [hasError, setHasError] = useState({ error: false, message: '' })

  const { disneyId } = useParams()
  // console.log(disneyId)

  useEffect(() => {
    const getOneChar = async () => {
      try {
        const { data } = await axios.get(`https://api.disneyapi.dev/characters/${disneyId}`)
        setChar(data)
        console.log(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    // }
    getOneChar()
  }, [disneyId])

  return (
    <div className="singlePageContain">
      <div className="disney-logo text-center">
        <img src={disneyLogo} alt="disney" />
      </div>
      <Container className="mt-4">
        {char ?
          <div className="char-card">
            <Row>
              <div className="img-name">
                <Col md="5">
                  <div className="char-img">
                    <img className="w-100" src={char.imageUrl} alt={disneyLogo} />
                  </div>
                </Col>
                <Col md="5" className="name-info">
                  <div className="other-info-name">
                    <h1><em className='name text-center'>{char.name}</em></h1>
                  </div>
                </Col>
              </div>
            </Row>
            <div className="other-info">
              {char.films.length ?
                <Row>
                  <Col>
                    <div md="5">
                      <h5 >Films: </h5>
                      <ul className='films-display'>
                        {char.films.map((film, _id) => (
                          <li key={_id}><em>
                            {film}
                          </em></li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                :
                ''
              }
              {char.parkAttractions.length ?
                <Row>
                  <Col>
                    <div md="5">
                      <h5>Park Attractions: </h5>
                      <ul className='park-display'>
                        {char.parkAttractions.map((park, _id) => (
                          <li key={_id}><em>
                            {park}
                          </em></li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                :
                ''
              }
              {char.shortFilms.length ?
                <Row>
                  <Col>
                    <div md="5">
                      <h5>Short Films: </h5>
                      <ul className='shortFilms-display'>
                        {char.shortFilms.map((sFilm, _id) => (
                          <li key={_id}><em>
                            {sFilm}
                          </em></li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                :
                ''
              }
              {char.tvShows.length ?
                <Row>
                  <Col>
                    <div md="5">
                      <h5>TV Shows: </h5>
                      <ul className='tvShows-display'>
                        {char.tvShows.map((show, _id) => (
                          <li key={_id}><em>
                            {show}
                          </em></li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                :
                ''
              }
              {char.videoGames.length ?
                <Row>
                  <Col>
                    <div md="5">
                      <h5>Video Games: </h5>
                      <ul className='games-display'>
                        {char.videoGames.map((games, _id) => (
                          <li key={_id}><em>
                            {games}
                          </em></li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                :
                ''
              }
              <br />
            </div>
          </div>
          :
          <h2 className="text-center">
            {hasError.error ? 'Hmm...This does not look like the character you wanted 🤔. Somethings gone wrong' : 'Loading...'}
          </h2>
        }
      </Container>
    </div>
  )
}
export default OneChar