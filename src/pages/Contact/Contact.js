import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const [nameState, setNameState] = useState({
    name: ''
  })
  const { movie } = useParams()

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movie}`)
      .then(({ data: movie }) => {
        console.log(movie)
      })
  }, [nameState.name])

  return (
    <h1>Contact</h1>
  )
}

export default Contact
