import React from 'react'
import '../../main-page.css'
import {Row,Col,Card,Button, CardImg, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import Track from './Track'
import { MetroSpinner } from "react-spinners-kit";
import {connect} from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadspinner: () => dispatch({ type: "LOAD_SPINNER"}),
    unloadspinner: () => dispatch({type: "UNLOAD_SPINNER"})

}); 

class SongPage extends React.Component{
    state = {
        albumInfo: '',
    }
    render() {
        return (
            <div className="song-container">
                    {this.props.loading ? <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><MetroSpinner  className="spinner-spotify" size={60} /></div> :
                    <Row className="page-row">
                    <Col className="col-12 col-md-3">
                    <Card className="my-3 card-page">
                        <CardImg top src={this.state.cover} alt="Card image cap" />
                        <CardBody className="card-body-page">
                            <CardTitle className="song-title-page">{this.state.title}<br/></CardTitle>
                            <CardTitle className="song-artist-page">{this.state.artist}<br/></CardTitle>
                            <Button className="song-btn">Play</Button>
                            <CardSubtitle className="date-and-number">{this.state.date} : {this.state.songs} songs</CardSubtitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col className="col-12 col-md-9">
                        <Row className="track-col">
                        {this.state.albumInfo && this.state.albumInfo.data
                            .map((el,index)=> <Track trackInfo={el} key={index} />)}
                        </Row>
                    </Col>
                </Row>}
            </div>
        )
    }
    componentDidMount = async() => {
        this.props.loadspinner();
        setTimeout(async() => {
            await this.fetchAlbum()
            this.props.unloadspinner()
        }, 500);
    }
    fetchAlbum = async() => {
        this.props.loadspinner();
        try{
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + this.props.match.params.songId,{
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
                },
                method: "GET"
            })
            let infoAlbum = await response.json()
            let mainDate = infoAlbum.release_date.split("-")
            this.setState({
                cover: infoAlbum.cover_medium,
                title: infoAlbum.title,
                date: mainDate[0],
                songs: infoAlbum.tracks.data.length,
                artist: infoAlbum.artist.name,
                albumInfo: infoAlbum.tracks,
            })

            this.props.unloadspinner();
        }catch(error){
            console.log('Error', error);
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongPage)