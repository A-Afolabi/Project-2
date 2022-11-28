import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Standings = () => {

  const { leagueId } = useParams()
  console.log(leagueId)

  useEffect(() => {
    const getSingleLeague = async () => {
      try {
        const { data } = await axios.get(`https://football-standings-api-git-master-azharimm.vercel.app/leagues/${leagueId}`)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSingleLeague()
  }, [leagueId])

  return (
    <h2>League Standings</h2>
  )
}
export default Standings

