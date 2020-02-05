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

class SearchList extends React.Component {
    render(){
        return(
            <Col className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  card-col">
                <Card className="my-3 card-single">
                    <CardImg top src={this.props.song.album.cover_medium} alt="Card image cap" />
                        <CardBody>
                            <Link to={"/details-song"+ this.props.song.album.id} >
                                <CardTitle className="text-truncate card-title-single">{this.props.song.title}</CardTitle>
                            </Link>
                            <Link to={"/details-artist" + this.props.song.artist.id} >
                            <CardSubtitle className="card-subtitle-single">{this.props.song.artist.name}</CardSubtitle>
                            </Link>
                            <div className='play-icon-div' onClick={() => this.props.selectSong(this.props.song)}>
                                <FontAwesomeIcon 
                                icon={faPlayCircle}  />
                            </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)