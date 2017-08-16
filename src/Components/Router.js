// REACT
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import App from './App'
import Header from './Header'

class Router extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/a-propos' component={App} />
        </div>
      </BrowserRouter>
     )
   }
}

export default Router
