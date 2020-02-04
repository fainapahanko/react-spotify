import React from 'react'
import {Row, Spinner} from 'reactstrap'
import MusicList from './MusicList'
import '../../main-page.css'
import SearchList from './SearchList'
import { MetroSpinner } from "react-spinners-kit";
import { connect } from 'react-redux';

var artists = ["Radiohead", "Moderat", "Massive Attack"]

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadspinner: () => dispatch({ type: "LOAD_SPINNER"}),
    unloadspinner: () => dispatch({type: "UNLOAD_SPINNER"})
}); 

class HomePage extends React.Component{
    state = { 
        tracks: ""
    }
    render() {
        return (
            <>
            <div className="home-container">
                <Row>

                {this.props.loading && <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><MetroSpinner  className="spinner-spotify" size={60} /></div>}
                {this.state.tracks && this.state.tracks
                    .map((track, index) => <MusicList tracks={track} key={index} />)}
                </Row>
            </div>
            </>
        )
    }


    fetchWithSearch = async(search) => {
        this.setState({ 
            loading: true
        })
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
            }
        })
        let musicInfo = await response.json()
        this.setState({
            searchedMusic: musicInfo.data,
            loading: false
        })
    }


    componentDidMount = async() => {
        setTimeout(async() => {
            await this.fetchingMusic()
        }, 2000);
    }

    fetchingMusic = async() => {
        this.props.loadspinner()
        setTimeout(() =>{
            this.props.unloadspinner();
            }, 3000)
        artists.forEach(async(artist) => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist + "&limit=5", {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
                }
            })
            let musicInfo = await response.json()
            this.setState({
                tracks: [...this.state.tracks, {
                    tracks: musicInfo.data,
                    title: artist
                }],
            });
           
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

