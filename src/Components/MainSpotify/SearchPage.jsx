import React, {Component} from 'react';
import {Input, Label, Row} from 'reactstrap'
import { connect } from 'react-redux';
import SearchList from './SearchList'
import '../../main-page.css'

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    artistSearch: (search) => dispatch(searchOnChange(search))
})

const searchOnChange = (e) => {
    let searchResult = e.target.value
    return(dispatch) => {
        dispatch({
            type: "SEARCH_ARTIST",
            payload: searchResult
        })
    }
}

class SearchPage extends Component {
    state = { 
        searchedMusic: undefined
     }
    render() { 
        return ( 
            <div className="home-container"> 
                <div className="search-label">
                    <Label>Search for song </Label>
                    <Input type="text" onChange={this.props.artistSearch} placeholder={this.props.searchArtist} className="search-container">
                    </Input>
                </div>
                <Row>
                {this.state.searchedMusic && this.state.searchedMusic
                    .map((track, index) => <SearchList song={track} key={index} />)}
                </Row>
            </div>
         );
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.searchArtist !== this.props.searchArtist) {
            this.fetchWithSearch();
        }
    }

    fetchWithSearch = async() => {
        if(this.props.searchArtist.length > 3) {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.props.searchArtist, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "27579eb660msh15a2248514f7b35p1ae83djsnf94b95f7dc4d"
                }
            })
            let musicInfo = await response.json()
            this.setState({
                searchedMusic: musicInfo.data,
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);