// REACT
import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

// components
import Router from './Components/Router'

// initialize database
var config = {
  apiKey: 'AIzaSyCfwUCSGZ4J9Dz7VIPvjLkdDBfVqbLJAvA',
  authDomain: 'unarbrepourmonquartier.firebaseapp.com',
  databaseURL: 'https://unarbrepourmonquartier.firebaseio.com',
  projectId: 'unarbrepourmonquartier',
  storageBucket: 'unarbrepourmonquartier.appspot.com'
}
firebase.initializeApp(config);

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)
