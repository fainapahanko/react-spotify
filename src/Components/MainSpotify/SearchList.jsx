import React from 'react'
import {Card, CardImg, Col, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import '../../main-page.css'
import {Link} from 'react-router-dom'

class SearchList extends React.Component {
    render(){
        return(
            <Col className="col-2 card-col">
                <Card className="my-3 card-single">
                    <CardImg top width="180px" src={this.props.song.album.cover_medium} alt="Card image cap" />
                        <CardBody>
                            <Link to={"/details-song"+ this.props.song.album.id} >
                                <CardTitle className="text-truncate card-title-single">{this.props.song.title}</CardTitle>
                            </Link>
                            <Link to={"/details-artist" + this.props.song.artist.id} >
                            <CardSubtitle className="card-subtitle-single">{this.props.song.artist.name}</CardSubtitle>
                            </Link>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default SearchList