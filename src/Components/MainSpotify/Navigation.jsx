import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faHome, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Button, Input} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../main-page.css'

var height = {
    height: "85%"
}

class Navigation extends React.Component{
    state = {
        searchQuery: ''
    }
    search = (ev) => {
        console.log(ev.target.value)
    }
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
                        <Link to="/home">
                            Home
                        </Link>
                        </NavText>
                </NavItem>
                <NavItem eventKey="search">
                    <NavIcon>
                        <FontAwesomeIcon icon={faSearch} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                        {this.state.searchQuery.length > 2 && <Link to="/s=:searchQuery"> </Link>}
                        <Input onChange={this.search} type="text" placeholder="search for song or artist" />
                    </NavText>
                </NavItem>
                <NavItem eventKey="library">
                    <NavIcon>
                        <FontAwesomeIcon icon={faBookmark} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                        Library
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

export default Navigation