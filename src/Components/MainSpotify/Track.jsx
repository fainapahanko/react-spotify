import React from 'react'
import {Col, Row} from 'reactstrap'
import '../../main-page.css'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

class Track extends React.Component{
    state = {}
    render(){
        let time = parseInt(this.props.trackInfo.duration)
        let time2 = time/60
        let duration = time2.toFixed(2)
        return(
            <Col md="12" className="track-col">
                <Row>
                    <Col md="1" className="col-track pl-4">
                        <FontAwesomeIcon icon={faMusic} style={{fontSize: "15px", color: "rgba(255,255,255,0.5"}}/>
                    </Col>
                    <Col md="10" className="col-track col-track-8">
                        <h2 className="track-title">{this.props.trackInfo.title}</h2>
                        <h2 className="track-artisr">{this.props.trackInfo.artist.name}</h2>
                    </Col>
                    <Col md="1" className="col-track">
                        <h2 className="track-title">{duration}s</h2>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default withRouter(Track)