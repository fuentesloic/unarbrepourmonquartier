// REACT
import React from 'react'
import { NavLink } from 'react-router-dom'

class NavLi extends React.Component {
  render() {
    return (
      <li><NavLink id={this.props.to} to={this.props.to}>{this.props.title}</NavLink></li>
    )
  }
}

export default NavLi
