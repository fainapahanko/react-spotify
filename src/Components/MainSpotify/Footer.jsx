import React from "react";
import "../../main-page.css";
import { connect } from "react-redux";

const mapStateToProps = state => state

class Footer extends React.Component {
    render (){
        return (
            <div className="phantom-player">
              <div className="footer-player-box">
                {this.props.selectedSong && <h2 style={{fontSize: "24px", color:"white"}}>{this.props.selectedSong.title}</h2>}
                {this.props.selectedSong ? 
                                  <audio
                                  src={this.props.selectedSong.preview && this.props.selectedSong.preview}
                                  controls
                                  volume="0.5"
                                /> : 
                                <audio
                                controls
                                volume="0.5"
                              />}
              </div>
            </div>
          );
    }
};

export default connect(mapStateToProps)(Footer);
