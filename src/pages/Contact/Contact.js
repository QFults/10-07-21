import { useParams } from "react-router-dom"

const Contact = () => {
  const { user } = useParams()

  return (
    <h1>Contact {user}</h1>
  )
}

export default Contact
