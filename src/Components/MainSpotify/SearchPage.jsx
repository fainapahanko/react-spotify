import React from 'react'
import SearchList from './SearchList'
import {Row} from 'reactstrap'
import { MetroSpinner } from "react-spinners-kit";

class SearchPage extends React.Component{
    state = {
        music: "",
        loading: true
    }
    render() {
        return(
            <div className="home-container">
                <Row>
                    {this.state.loading ? <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><MetroSpinner  className="spinner-spotify" size={60} /></div> : this.state.music.map((m,i) => <SearchList key={i} song={m}/>)}
                </Row>
            </div>
        )
    }
    componentDidMount = async () => {
        setTimeout(async() => {
            this.fetchingMusic(this.props.match.params.searchQuery)
        },2000)
    }

    fetchingMusic = async (search) => {
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
        console.log(musicInfo)
        this.setState({
            music: musicInfo.data,
            loading: false
        })
    }
}

export default SearchPage