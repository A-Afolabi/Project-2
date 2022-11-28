import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Seasons = () => {

  const [seasons, setSeasons] = useState([])
  const [leagues, setLeagues] = useState([])
  // console.log(leagues)
  const [hasError, setHasError] = useState({ error: false, message: '' })

  const { leagueId } = useParams()
  // console.log(leagueId)

  useEffect(() => {
    const getSeasons = async () => {
      try {
        const { data } = await axios.get(`https://api-football-standings.azharimm.dev/leagues/${leagueId}/seasons`)
        setSeasons(data.data.seasons)
        // console.log(data.data.seasons)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getSeasons()
  }, [leagueId])

  useEffect(() => {
    const allLeagues = async () => {
      try {
        const { data } = await axios.get('https://api-football-standings.azharimm.dev/leagues')
        // console.log(data.data)
        setLeagues(data.data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    allLeagues()
  }, [])

  const [league, setLeague] = useState({})

  useEffect(() => {
    if (leagueId) {
      const result = leagues.find(league => {
        // console.log(leagueId, league.id)
        league.id === leagueId
      })
      setLeague(result)
    }
  }, [leagues])
  // console.log(league)

  return (
    <><>
      <div className='logo'>
        <Card>
          <img src={league?.logos?.light} />
          <Card.Body>
            <Card.Text className="text-center">
              <p>{league?.name}</p>
              <em className='d-block'></em>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
      <h2><em>Available Seasons</em></h2>
      <Container className="mt-3">
        <Row>
          {seasons.length ?
            <>
              {seasons.map((season, _id) => {
                console.log(season)
                const { displayName } = season
                // console.log(_id)
                return (
                  <Col key={_id} md="6" lg='6' className='seasons mb-4'>
                    <Link to={`/Leagues/${_id}/Standings`}>
                      <Card className='Card h-100'>
                        <Card.Title className="text-center">{displayName}</Card.Title>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </>
            :
            <p>No League</p>
          }
        </Row>
      </Container></>
  )
}
export default Seasons