// REACT
import React from 'react'
import * as firebase from 'firebase'
// Components
import NavLi from './NavLi'

class Nav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navLink: {},
      navTitle: {},
      lang: {}
    }
  }

  componentDidMount() {
    let lang = document.location.href
    if (lang.includes('/fr/')) {
      this.setState({
        lang: 'fr'
      })
    }
    const rootRef = firebase.database().ref('/')
    const navLink = rootRef.child('navLink')
    navLink.on('value', snap => {
      this.setState({
        navLink: snap.val(),
      })
    })
    const navTitle = rootRef.child('navTitle')
    navTitle.on('value', snap => {
      this.setState({
        navTitle: snap.val(),
      })
    })
  }

  render() {

    const navLi = Object
      .keys(this.state.navLink)
      .map(key => <NavLi key={key} to={this.state.navLink[key]} title={this.state.navTitle[key]}/>)

    return (
        <ul>
          {navLi}
        </ul>      
    )
  }
}

export default Nav
