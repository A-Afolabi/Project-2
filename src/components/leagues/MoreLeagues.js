import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const MoreLeagues = () => {

  const [leagues, setLeagues] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const allLeagues = async () => {
      try {
        const { data } = await axios.get('https://api-football-standings.azharimm.site/leagues')
        setLeagues(data.data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    allLeagues()
  }, [])

  return (
    <Container className="mt-4">
      <Row>
        {leagues.length ?
          <>
            {leagues.map((league, _id) => {
              const { name, logos } = league
              console.log(name, league)
              return (
                <Col key={_id} md="4" lg="4" className='league mb-4'>
                  <Link to={`/Leagues/${_id}/`}>
                    <Card className="h-1000">
                      <div className="card-image m-auto">
                        <img className="w-100" src={logos.light} alt={name} />
                      </div>
                      <Card.Footer className="text-center">
                        {name}
                        <em className='d-block'></em>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </>
          :
          <p>Leagues</p>
        }
      </Row>
    </Container>
  )
}
export default MoreLeagues