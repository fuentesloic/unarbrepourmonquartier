// REACT
import React from 'react'
// Components
import NavLi from './NavLi'

class Nav extends React.Component {

  render() {

    const navLi = Object
      .keys(this.props.navLink)
      .map(key => <NavLi key={key} to={this.props.navLink[key]} title={this.props.navTitle[key]}/>)

    return (
      <ul>
        {navLi}
      </ul>
    ) 
  }
}

export default Nav
