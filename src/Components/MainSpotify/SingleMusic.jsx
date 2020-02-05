import React from 'react'
import {Card, CardImg, Col, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../main-page.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    selectSong: song => dispatch({
        type:"SELECT_SONG",
        payload: song 
    })
})

class SingleMusic extends React.Component{
    state = { 
    
    }
    render() {
        return (
            <Col className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  card-col">
                <Card className="my-3 card-single">
                <CardImg  top src={this.props.tracks.album.cover_medium} alt="Card image cap" />
                    <CardBody>
                        <Link to={"/details-song"+ this.props.tracks.album.id} >
                            <CardTitle className="text-truncate card-title-single">{this.props.tracks.title}</CardTitle>
                        </Link>
                        <Link to={"/details-artist" + this.props.tracks.artist.id} >
                            <CardSubtitle className="card-subtitle-single">{this.props.tracks.artist.name}</CardSubtitle>
                        </Link>
                        <div className='play-icon-div' onClick={() => this.props.selectSong(this.props.tracks)}>
                            <FontAwesomeIcon 
                            icon={faPlayCircle} />
                        </div>
                </CardBody>
                </Card>
            </Col>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleMusic)