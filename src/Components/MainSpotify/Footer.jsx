import React from "react";
import "../../main-page.css";
import { connect } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const mapStateToProps = state => state;

const Footer = (props) => {
  return (
    <div className="phantom-player">
      <div className="footer-player-box">
        {props.selectedSong ? (
          <h2 className="selected-song-title">
            {props.selectedSong.title}
          </h2>
        ) : (
          <h2 className="selected-song-title">Select song to play</h2>
        )}
        {props.selectedSong ? (
          <AudioPlayer
            src={props.selectedSong.preview}
            controls
            volume="0.5"
          />
        ) : (
          <AudioPlayer controls volume="0.5" />
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Footer);
