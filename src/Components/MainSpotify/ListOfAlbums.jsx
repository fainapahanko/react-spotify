import React from 'react'
import {Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import '../../main-page.css'

const ListOfAlbums = (props) => {
    console.log(props)
    return(
        <Col md="2">
            <Card className="albums-card">
                <CardImg top width="100%" src={props.album.cover_medium} alt="Card image cap" />
                <CardBody>
                <CardTitle className="albums-title">{props.album.title}</CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ListOfAlbums