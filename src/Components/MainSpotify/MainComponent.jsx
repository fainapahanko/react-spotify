import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import Footer from './Footer'
import SongPage from './SongPage'
import Library from "./Library"
import SearchPage from './SearchPage'
import ArtistPage from './ArtistPage'

class MainComponent extends React.Component {
    render(){
        return (
            <Router>
                <Navigation />
                <Route path="/" exact component={HomePage} />
                <Route path="/details-song:songId" component={SongPage} />
                <Route path="/details-artist:artistId" component={ArtistPage} />
                <Route path="/library" component={Library} />
                <Route path="/search-page" component={SearchPage} />
                <Footer />
            </Router>
        )
    }
}

export default MainComponent