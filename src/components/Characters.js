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
  const [page, setPage] = useState(1)
  // const [everyChar, setEveryChar] = useState([])
  // const [filterList, setFilterList] = useState([])
  // const [filteredChar, setFilteredChar] = useState([])

  const currentPage = page

  useEffect(() => {
    const allChar = async () => {
      try {
        const { data } = await axios.get(`https://api.disneyapi.dev/character?page=${page}`)
        // console.log(data.data)
        setDisneyChar(data.data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    allChar()
  }, [page])

  const nextPage = () => {
    page < 149 && setPage(page + 1)
  }
  const prevPage = () => {
    page > 1 && setPage(page - 1)
  }

  // useEffect(() => {
  //   const getAllChar = async () => {
  //     try {
  //       const { data } = await axios.get('http://api.disneyapi.dev/character?pageSize=3750')
  //       // console.log(data.data)
  //       setEveryChar(data.data)
  //       // const foundChar = []
  //       // for (let i = 0; i < data.data.length; i++) {
  //       //   if (data.data[i].name.toLowerCase()) {
  //       //     foundChar.push(data.data[i])
  //       //   }
  //       // }
  //       // console.log(foundChar)
  //     } catch (err) {
  //       setHasError({ error: true, message: err.message })
  //     }
  //   }
  //   getAllChar()
  // }, [everyChar])

  const handleSearch = () => {

  }

  return (
    <div className="charsPageContain">
      <div className="disney-logo text-center">
        <img src={disneyLogo} alt="disney" />
      </div>
      <div className="search">
        {currentPage !== 1 ?
          <button className="btn" onClick={prevPage}>Previous Page</button>
          :
          <button disabled className="btn" onClick={prevPage}>Previous Page</button>
        }
        <form onChange={handleSearch}>
          <input type="text" id="disneyId" placeholder=" Search Character..." />
          {/* Maybe another input */}
        </form>
        {currentPage !== 149 ?
          <button className="btn" onClick={nextPage}>Next Page</button>
          :
          <button disabled className="btn" onClick={nextPage}>Next Page</button>
        }
      </div>
      <Container>
        {disneyChar.length ?
          <>
            <Row>
              {disneyChar.map(charDis => {
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
              {/* } */}
            </Row>
            <Row>
              <div className="pages">
                {currentPage !== 1 ?
                  <button className="btn" onClick={prevPage}>Previous Page</button>
                  :
                  <button disabled className="btn" onClick={prevPage}>Previous Page</button>
                }
                <p>Page {currentPage} of 149</p>
                {currentPage !== 149 ?
                  <button className="btn" onClick={nextPage}>Next Page</button>
                  :
                  <button disabled className="btn" onClick={nextPage}>Next Page</button>
                }
              </div>
            </Row>
          </>
          :
          <h2 className="mb-3">
            {hasError.error ? 'Hmm...This doesn\'t look like Disney characters 🤔. Somethings gone wrong' : 'Loading...'}
          </h2>
        }
      </Container>
    </div >
  )
}
export default Characters