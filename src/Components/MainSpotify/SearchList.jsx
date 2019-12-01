import React from 'react'
import {Card, CardImg, Col, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import '../../main-page.css'
import {Link} from 'react-router-dom'

const SearchList = (props) => {
    console.log(props)
    return(
        <Col className="col-2 card-col">
            <Card className="my-3 card-single">
                <CardImg top width="180px" src={props.song.album.cover_medium} alt="Card image cap" />
                    <CardBody>
                        <Link to={"/details-song"+props.song.album.id} >
                            <CardTitle className="text-truncate card-title-single">{props.song.title}</CardTitle>
                        </Link>
                        <Link to={"/details-artist" + props.song.artist.id} >
                        <CardSubtitle className="card-subtitle-single">{props.song.artist.name}</CardSubtitle>
                        </Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SearchList