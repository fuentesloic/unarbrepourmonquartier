// REACT
import React from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
// Components
import Nav from './header/Nav'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navLink: {},
      navTitle: {}
    }
    this.setFrench = this.setFrench.bind(this);
    this.setEnglish = this.setEnglish.bind(this);
  }

  componentWillMount() {
    const lang = document.location.pathname.slice(1,3)
    if(lang === 'en') {
      this.setEnglish()
    } else if(lang === 'fr'){
      this.setFrench()
    } else {
      document.location.href = '/fr'
    }
  }

  setFrench() {
    const rootRef = firebase.database().ref(`/lang/fr/navigation/`)
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

  setEnglish() {
    const rootRef = firebase.database().ref(`/lang/en/navigation/`)
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
    return (
      <ul className='nav'>
        <li><a href="#"><img src="/img/logo.png" alt="logo"/></a></li>
        <li className='menu'><Nav navLink={this.state.navLink} navTitle={this.state.navTitle} /></li>
        <li>
          <ul className='lang'>
            <li onClick={this.setFrench}><Link to='/fr/'>fr</Link></li>
            <li onClick={this.setEnglish}><Link to='/en/'>en</Link></li>
          </ul> 
        </li>
      </ul> 
    )
  }
}

export default Header
