import React from 'react'
import { MetroSpinner } from "react-spinners-kit";
import {Button, Row} from 'reactstrap'
import '../../main-page.css'
import ListOfAlbums from './ListOfAlbums'
import {connect} from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadspinner: () => dispatch({ type: "LOAD_SPINNER"}),
    unloadspinner: () => dispatch({type: "UNLOAD_SPINNER"})
}); 
 
class ArtistPage extends React.Component {
    state = {
        cover: '',
        artist: '',
        albums: '',
    }
    render(){
        var style = {
            textAlign: "center",
            color: "white",
            height: "300px",
            background: "linear-gradient(to bottom, rgba(0,130,170,0), rgb(14, 14, 14) 100%)," + `url(${this.state.cover})` + "no-repeat center", 
            backgroundSize: "cover",
        }

        return(
            <div className="artist-container">
                {this.props.loading && <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><MetroSpinner  className="spinner-spotify" size={60} /></div>} 
                {this.state.artist && <div style={style}>
                    <h3 className="artist-name">{this.state.artist.name}</h3>
                    <Button className="btn-play">Play</Button>
                    <Button className="btn-follow">Folow</Button>
                                        </div>}
                <div style={{padding: "50px 40px"}}> 
                {!this.props.loading &&                   <h4 className="artist-albums">Albums</h4>}
                    <Row>
                    {this.state.albums && 
                    this.state.albums.map((m,i) => <ListOfAlbums album={m} key={i} />)}
                    </Row>
                </div>
            </div>
        )
    }
    componentDidMount = async() => {
        this.props.loadspinner();
        setTimeout(async()=>{
            this.fetchingArtist()
            this.fetchingAlbums()
            this.props.unloadspinner()
        }, 2000)
    }

    fetchingArtist = async() => {
        this.props.loadspinner()
        setTimeout(() =>{
            this.props.unloadspinner();
            }, 3000)

        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.artistId, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
            }
        })
        let artistInfo = await response.json()
        this.setState({
            cover: artistInfo.picture_xl,
            artist: artistInfo,
        })
        
    }

    fetchingAlbums = async() => {
        this.props.loadspinner();
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
        })
        this.props.unloadspinner();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)