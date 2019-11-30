import React from 'react'
import '../../main-page.css'
var style = {
    backgroundColor: "#252526",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "15%",
    width: "100vw",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '15%',
}

const Footer = () => {
    return(
        <div>
            <div style={phantom} />
                <div style={style}>
                    <h3>The best player ever still in process </h3>
                </div>
        </div>
    )
}

export default Footer