import axios from 'axios'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contact from './pages/Contact'

const movies = ['Goodfellas', 'The Room', 'Parasite', 'Mugen Train']

const App = () => {
  const getRandomMovie = () => {
    const movie = movies[Math.floor(Math.random() * movies.length)]
    return (
      <Link to={`/contact/${movie}`}>
        Contact
      </Link>
    )
  }

  useEffect(() => {
    axios.get('/api/test')
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>
            Home
          </Link>
          {getRandomMovie()}
        </nav>
        <Switch>
          <Route exact path='/'>
            <h1>The Home Page.</h1>
          </Route>
          <Route path='/contact/:movie'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
