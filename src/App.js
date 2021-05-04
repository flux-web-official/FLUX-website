import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import WebDevelopment from './components/WebDevelopment'
import Portfolio from './components/Portfolio'
import SEO from './components/SEO'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/WebDevelopment'><WebDevelopment/></Route>
          <Route path='/Portfolio'><Portfolio/></Route>
          <Route path='/SEO'><SEO/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
