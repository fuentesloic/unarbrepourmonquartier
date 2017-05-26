// REACT
import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Nav from './header/Nav'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lang: 'fr'
    }
    this.setFrench = this.setFrench.bind(this);
    this.setEnglish = this.setEnglish.bind(this);
  }

  setFrench() {
    this.setState({
      lang: 'fr'
    })
  }
  setEnglish() {
    this.setState({
      lang: 'en'
    })    
  }

  render() {
    return (
      <ul className='nav'>
        <li><Nav lang={this.state.lang}/></li>
        <li>
          <ul>
            <li onClick={this.setFrench}><Link to='/fr/'>fr</Link></li>
            <li onClick={this.setEnglish}><Link to='/en/'>en</Link></li>
          </ul> 
        </li>
      </ul> 
    )
  }
}

export default Header


