import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faHome, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Button, Input} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../main-page.css'
import { connect } from 'react-redux';

const height = {
    height: "85%",
    searchQuery: undefined
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    searchArtist: (search) => dispatch(searchOnChange(search))
})

const searchOnChange = (e) => {
    return(dispatch) => {
        let searchResult = e.target.value
        dispatch({
            type: "SEARCH_ARTIST",
            payload: searchResult
        })
    }
}

class Navigation extends React.Component{
    render() {
        return (
        <SideNav style={height} className="sidenavigation">
        <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHome} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                        <NavText>
                        <Link to="/">
                            Home
                        </Link>
                        </NavText>
                </NavItem>
                <NavItem eventKey="search">
                    <NavIcon>
                        <FontAwesomeIcon icon={faSearch} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                            <Input 
                                style={{background:"black",width:"150px"}} 
                                onChange={this.props.searchArtist} 
                                type="text" 
                                placeholder="search for song or artist" 
                            />
                    </NavText>
                </NavItem>
                <NavItem eventKey="library">
                    <NavIcon>
                        <FontAwesomeIcon icon={faBookmark} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                        <Link to="/library">
                            Library
                        </Link>
                    </NavText>
                </NavItem>
                    <NavItem eventKey="sign-in">
                        <NavIcon>
                        </NavIcon>
                        <NavText>
                            <Button outline id="sign-up-btn">Sign in</Button>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="log-in">
                        <NavIcon>
                        </NavIcon>
                        <NavText>
                            <Button outline id="login-btn">Login</Button>
                        </NavText>
                    </NavItem>
            </SideNav.Nav>
        </SideNav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)