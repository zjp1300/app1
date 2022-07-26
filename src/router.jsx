import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = () => (
  <div>
    <h2>some</h2>
  </div>
)
const News = props => {
  console.log(props)
  return (
    <div>
      <h2>新闻页 id:{props.match.params.id}</h2>
    </div>
  )
}
export const BasceExample = () => (
  <Router basename='admin'>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Aboule</Link>
        </li>
        <li>
          <Link to='/topics'>Topic</Link>
        </li>
        <li>
          <Link to={{ pathname: '/me', hash: '#123', search: '?username=admin', state: { msg: 'hello' } }}> 123</Link>
        </li>
        <li>
          <Link to='/news/123'> 新闻页</Link>
        </li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topic} />
      <Route path='/news/:id' component={News} />
    </div>
  </Router>
)
