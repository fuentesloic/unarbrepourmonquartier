// REACT
import React from 'react'
import ReactDOM from 'react-dom'

// components
import Router from './Components/Router'

const Root = _ => {
  return (
    <Router></Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
