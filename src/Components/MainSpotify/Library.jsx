import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'reactstrap'
import '../../main-page.css'
import { faMusic, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    selectSong: song => 
        dispatch({
            type: "SELECT_SONG",
            payload: song
        }),
    removeLike: like =>
        dispatch ({
            type: "REMOVE_LIKE",
            payload: like
        })
})

class Library extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="song-container">
                <h1 style={{color: "rgba(255,255,255,0.5", marginBottom: "50px"}}>Favorite songs</h1>
                {this.props.like && this.props.like.map((trackInfo, i) => (
                    <Row>
                    <Col md="1" className="col-track pl-4">
                        <FontAwesomeIcon icon={faMusic} style={{fontSize: "15px", color: "rgba(255,255,255,0.5)"}}/>
                    </Col>
                    <Col md="9" onClick={() => this.props.selectSong(trackInfo)} className="col-track col-track-8">
                        <h2 className="track-title">{trackInfo.title}</h2>
                        <h2 className="track-artisr">{trackInfo.artist.name}</h2>
                    </Col>
                    <Col md="1" className="col-track">
                        <h2 className="track-title">{trackInfo.duration}s</h2>
                    </Col>
                    <Col md="1" className="col-track">
                        <FontAwesomeIcon onClick={() => this.props.removeLike(trackInfo)} icon={faTimesCircle} style={{fontSize: "15px", color: "rgba(255,255,255,0.5)"}}/>
                    </Col>
                </Row>
                ))} 
            </div>
            );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Library);