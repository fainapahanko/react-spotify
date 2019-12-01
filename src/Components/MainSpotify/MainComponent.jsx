import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import Footer from './Footer'
import SongPage from './SongPage'
import SearchPage from './SearchPage'
import ArtistPage from './ArtistPage'

const MainComponent = () => {
    return (
        <Router>
            <Navigation />
            <Route path="/" exact component={HomePage} />
            <Route path="/details-song:songId" component={SongPage} />
            <Route path="/details-artist:artistId" component={ArtistPage} />
            <Route path="/s=:searchQuery" component={SearchPage} />
            <div className="home-container"></div>
            <Footer />
        </Router>
    )
}

export default MainComponent