import React from "react"

// Import typefaces

// this is causing some problem in the glitch log
//   EIO: i/o error, read
//   @ ./~/typeface-merriweather/index.css 4:14-88 13:2-17:4 14:20-94
//
// import "typeface-montserrat"
// import "typeface-merriweather"


import profilePic from "./carmageddon.png"
import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by
        {" "}
        <strong>Mike Wolf</strong>
        <small><em> (& glitchified by <a href="https://twitter.com/100ideas" style={{color: "black"}}>@100ideas</a>)</em></small>
       
      </p>
    )
  }
}

export default Bio