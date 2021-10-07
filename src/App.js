import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contact from './pages/Contact'

const users = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jenny Doe']

const App = () => {
  const getRandomUser = () => {
    const user = users[Math.floor(Math.random() * users.length)]
    return (
      <Link to={`/contact/${user}`}>
        Contact
      </Link>
    )
  }
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>
            Home
          </Link>
          {getRandomUser()}
        </nav>
        <Switch>
          <Route exact path='/'>
            <h1>The Home Page.</h1>
          </Route>
          <Route path='/contact/:user'>
            <Contact />
          </Route>    
        </Switch>
      </div>
    </Router>
  )
}

export default App
