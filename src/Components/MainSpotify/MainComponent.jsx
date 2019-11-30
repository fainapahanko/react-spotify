import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import Footer from './Footer'
import SongPage from './SongPage'
import SearchPage from './SearchPage'

const MainComponent = () => {
    return (
        <Router>
            <Navigation />
            <Route path="/home" exact component={HomePage} />
            <Route path="/details-song:songId" component={SongPage} />
            <Route path="/s=:searchQuery" component={SearchPage} />
            <Footer />
        </Router>
    )
}

export default MainComponent