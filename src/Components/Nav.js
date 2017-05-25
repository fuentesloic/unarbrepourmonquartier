// REACT
import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink to='informations'>A Propos</NavLink></li>
        <li><NavLink to='acheter'>Acherter un arbre</NavLink></li>
        <li><NavLink to='conseils'>Conseils</NavLink></li>
        <li><NavLink to='recuperer-son-arbre'>Récupérer son arbre</NavLink></li>
        <li><NavLink to='contact'>Nous contacter</NavLink></li>
      </ul>
    )
  }
}

export default Nav
