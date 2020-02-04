import React from 'react'
import SingleMusic from './SingleMusic'
import {Row, Col} from 'reactstrap'
import '../../main-page.css'

class MusicList extends React.Component {
    render(){
        return (
            <div className="div-with-music mb-5">
                <Col md="12" className="single-artist-block">
                <h2 className="title-artisr">{this.props.tracks.title}</h2>
                </Col>
                <Col md="12">
                    <Row>
                    {this.props.tracks.tracks
                        .map((m,index) => 
                        <SingleMusic tracks={m} key={index}
                        />
                    )}
                    </Row>
                </Col>
            </div>
        )
    }
}

export default MusicList