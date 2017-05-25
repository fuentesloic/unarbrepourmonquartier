// REACT
import React from 'react'
import { Link } from 'react-router-dom'

class Lang extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='/fr/'>FR</Link></li>
        <li><Link to='/en/'>EN</Link></li>
      </ul>
    )
  }
}

 export default Lang



