import React from 'react';
import './App.css';
import MainComponent from './Components/MainSpotify/MainComponent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
      <MainComponent />
  );
}

export default App;
