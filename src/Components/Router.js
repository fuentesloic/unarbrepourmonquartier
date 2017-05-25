// REACT
import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Components
import App from './App'
import Nav from './Nav'
import Lang from './Lang'

 class Router extends Component {
   render() {
     return (
       <BrowserRouter>
         <div className='rooter'>
           <Nav />
           <Lang />
           <Route path='/a-propos' component={App} />
           <Redirect from='*' to='/fr/' />
         </div>
       </BrowserRouter>
     )
   }
 }

 export default Router

