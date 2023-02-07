import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import disneyLogo from './assets/disneyLogo.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Characters = () => {

  const [disneyChar, setDisneyChar] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const AllChar = async () => {
      try {
        const { data } = await axios.get('https://api.disneyapi.dev/characters')
        console.log(data.data)
        setDisneyChar(data.data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    AllChar()
  }, [])

  const handleSubmit = () => {

  }

  return (
    <div className="charsPageContain">
      <div className="disney-logo text-center">
        <img src={disneyLogo} alt="disney" />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength='500' id="disney-Id" placeholder=" Search Character..." />
        {/* Maybe another input */}
      </form>
      <Container>
        <Row>
          {disneyChar.length ?
            <>
              {disneyChar.map((charDis, i) => {
                const { name, imageUrl, _id } = charDis
                return (
                  <Col key={_id} sm="6" md="4" lg="3" className="disChar mb-4">
                    <Link to={`/Characters/${_id}`}>
                      <Card className="h-100">
                        <div className="card-image m-auto">
                          <img className="w-100" src={imageUrl} alt={disneyLogo} />
                        </div>
                        <Card.Footer className="text-center">
                          {name}
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </>
            :
            <h2>
              {hasError.error ? 'Hmm...This doesn\'t look like the Disney characters. Somethings on wrong' : 'Loading...'}
            </h2>
          }
        </Row>
      </Container>
    </div >
  )
}
export default Characters