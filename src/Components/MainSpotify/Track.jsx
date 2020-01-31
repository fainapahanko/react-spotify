import React from 'react'
import {Col, Row} from 'reactstrap'
import '../../main-page.css'
import { faMusic, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    selectSong: song => 
        dispatch({
            type: "SELECT_SONG",
            payload: song
        }),
    addLike: like => 
        dispatch({
            type: "ADD_LIKE",
            payload: like
        }),
    removeLike: like =>
        dispatch ({
            type: "REMOVE_LIKE",
            payload: like
        })
})

class Track extends React.Component{
    state = {like: false}
    handleLike= () =>{
        this.setState({
            like: !this.state.like
        })
        if (this.state.like){
            this.props.removeLike(this.props.trackInfo);
            console.log(this.props)
        } else {
            this.props.addLike(this.props.trackInfo);
            console.log(this.props)
        }
    }
    render(){
        let time = parseInt(this.props.trackInfo.duration)
        let time2 = time/60
        let duration = time2.toFixed(2)
        return(
            <Col md="12" className="track-col">
                <Row>
                    <Col md="1" className="col-track pl-4">
                        <FontAwesomeIcon icon={faMusic} style={{fontSize: "15px", color: "rgba(255,255,255,0.5)"}}/>
                    </Col>
                    <Col md="9" className="col-track col-track-8" onClick={() => this.props.selectSong(this.props.trackInfo)}>
                        <h2 className="track-title">{this.props.trackInfo.title}</h2>
                        <h2 className="track-artisr">{this.props.trackInfo.artist.name}</h2>
                    </Col>
                    <Col md="1" className="col-track">
                        <h2 className="track-title">{duration}s</h2>
                    </Col>
                    <Col md="1">
                        {this.state.like === false ? 
                        <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "15px"}} onClick={this.handleLike}>
                        </FontAwesomeIcon> : 
                        <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "15px", color:"rgba(255,255,255,0.5)"}} onClick={this.handleLike}></FontAwesomeIcon> } 
                   
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track))