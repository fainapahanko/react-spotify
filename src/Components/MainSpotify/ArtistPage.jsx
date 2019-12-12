import React from 'react'
import { GuardSpinner } from "react-spinners-kit";
import {Button, Row} from 'reactstrap'
import '../../main-page.css'
import ListOfAlbums from './ListOfAlbums'

class ArtistPage extends React.Component {
    state = {
        cover: '',
        artist: '',
        albums: '',
        loading: true
    }
    render(){
        var style = {
            textAlign: "center",
            color: "white",
            height: "300px",
            background: "linear-gradient(to bottom, rgba(0,130,170,0), rgb(14, 14, 14) 100%)," + `url(${this.state.cover})` + "no-repeat center", 
            backgroundSize: "cover",
        }

        console.log(this.state.cover)
        console.log(this.state.artist)
        console.log(this.state.albums)
        return(
            <div className="artist-container">
                {this.state.loading && <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><GuardSpinner  className="spinner-spotify" size={60} /></div>} 
                {this.state.artist && <div style={style}>
                    <h3 className="artist-name">{this.state.artist.name}</h3>
                    <Button className="btn-play">Play</Button>
                    <Button className="btn-follow">Folow</Button>
                                        </div>}
                <div style={{padding: "50px 40px"}}> 
                {!this.state.loading &&                   <h4 className="artist-albums">Albums</h4>}
                    <Row>
                    {this.state.albums && 
                    this.state.albums.map((m,i) => <ListOfAlbums album={m} key={i} />)}
                    </Row>
                </div>
            </div>
        )
    }
    componentDidMount = async() => {
        setTimeout(async()=>{
            this.fetchingArtist()
            this.fetchingAlbums()
        }, 2000)
    }

    fetchingArtist = async() => {
        this.setState({
            loading: true
        })
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.artistId, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
            }
        })
        let artistInfo = await response.json()
        console.log(artistInfo)
        this.setState({
            cover: artistInfo.picture_xl,
            artist: artistInfo,
            loading: false
        })
    }

    fetchingAlbums = async() => {
        this.setState({
            loading: true
        })
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.artistId + "/albums/", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
            }
        })
        let albumsInfo = await response.json()
        this.setState({
            albums: albumsInfo.data,
            loading: false
        })
    }
}

export default ArtistPage