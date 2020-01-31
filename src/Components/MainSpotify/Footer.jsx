import React from "react";
import "../../main-page.css";
var style = {
  backgroundColor: "#252526",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "15%",
  width: "100vw"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "15%"
};

class Footer extends React.Component {
    state ={ 

    } 
    render (){
        return (
            <div style={phantom}>
              <div style={style}>
                  <audio
                    className="col"
                    ref="audio_tag"
                    src={this.props.currentSong}
                    controls
                    volume="0.5"
                  />
              </div>
            </div>
          );
    }
};

export default Footer;
