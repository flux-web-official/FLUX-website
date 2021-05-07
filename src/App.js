import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import WebDevelopment from './components/WebDevelopment'
import Portfolio from './components/Portfolio'
import SEO from './components/SEO'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/WebDevelopment'><WebDevelopment/></Route>
          <Route path='/Portfolio'><Portfolio/></Route>
          <Route path='/SEO'><SEO/></Route>
          <Route path='/Contact'><Contact/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
