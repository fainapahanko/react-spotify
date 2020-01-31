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
    state = {
        currentSong: ""
    }
    changeCurrentSong = song => {
        this.setState({
            currentSong: song
        })
    }
    render(){
        return (
            <Router>
                <Navigation />
                <Route path="/" exact component={() => <HomePage changeCurrentSong={this.changeCurrentSong}/>} />
                <Route path="/details-song:songId" component={SongPage} />
                <Route path="/details-artist:artistId" component={ArtistPage} />
                <Route path="/s=:searchQuery" component={SearchPage} />
                <Route path="/library" component={Library} />
                {/* <div className="home-container"></div> */}
                <Footer currentSong={this.state.currentSong} />
            </Router>
        )
    }
}

export default MainComponent