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
        // for (let i = 1; i >= 149; i++) {
        const { data } = await axios.get(`https://api.disneyapi.dev/characters/${disneyId}`)
        // const { data } = await axios.get(`https://api.disneyapi.dev/characters/${disneyId}?page=${i}`).then((res) =>
        setChar(data)
        // )
        // }
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
        <Row>
          {char ?
            <div className="char-card">
              <Col md="5">
                <div className="img-name">
                  <img className="w-100" src={char.imageUrl} alt={disneyLogo} />
                </div>
              </Col>
              <Col md="5" className="name-info">
                <div className="other-info-name">
                  <h1><em className='d-block text-center'>{char.name}</em></h1>
                  <div className="other-info">
                    {char.films.length ?
                      <div>
                        <h5 >Films: </h5>
                        <ul className='films-display'>
                          {char.films.map(film => {
                            return <li><em>{film}</em></li>
                          })}
                        </ul>
                      </div>
                      :
                      []
                    }
                    {char.parkAttractions.length ?
                      <div>
                        <h5>Park Attractions: </h5>
                        <ul className='park-display'>
                          {char.parkAttractions.map(park => {
                            return <li><em>{park}</em></li>
                          })}
                        </ul>
                      </div>
                      :
                      []
                    }
                    {char.shortFilms.length ?
                      <div>
                        <h5>Short Films: </h5>
                        <ul className='shortFilms-display'>
                          {char.shortFilms.map(sFilm => {
                            return <li><em>{sFilm}</em></li>
                          })}
                        </ul>
                      </div>
                      :
                      []
                    }
                    {char.tvShows.length ?
                      <div>
                        <h5>TV Shows: </h5>
                        <ul className='tvShows-display'>
                          {char.tvShows.map(show => {
                            return <li><em>{show}</em></li>
                          })}
                        </ul>
                      </div>
                      :
                      []
                    }
                    {char.videoGames.length ?
                      <div>
                        <h5>Video Games: </h5>
                        <ul className='games-display'>
                          {char.videoGames.map(games => {
                            return <li><em>{games}</em></li>
                          })}
                        </ul>
                      </div>
                      :
                      []
                    }
                  </div>
                </div>
              </Col>
            </div>
            :
            <h2 className="text-center">
              {hasError.error ? 'Hmm...This does not look like the character you wanted. Somethings on wrong' : 'Loading...'}
            </h2>
          }
        </Row>
      </Container>
    </div>
  )
}
export default OneChar