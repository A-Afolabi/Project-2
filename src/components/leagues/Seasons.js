import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Seasons = () => {

  const { leagueId } = useParams()
  console.log(leagueId)

  useEffect(() => {
    const getSeasons = async () => {
      try {
        const { data } = await axios.get(`https://api-football-standings.azharimm.site/leagues/${leagueId}/seasons`)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSeasons()
  }, [leagueId])

  return (
    <h2>Available Seasons</h2>
  )
}
export default Seasons