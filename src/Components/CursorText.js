import React from 'react'
import "../css/CursorText.css"
import { TypeAnimation } from 'react-type-animation'

export default function CursorText() {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      "JD Public School ",
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      "The  future  of education ",
      1000,
      "Where education meets innovation ",
      1000,
      // `Shaping tomorrow's leaders todays`,
      // 1000
    ]}
    wrapper="span"
    speed={5}
    // style={{
    //   fontSize: "5em",
    //   fontFamily: "monospace",
    //   fontWeight: "bold",
    //   color: "white",

    // }}
    className='cursor-text'
    repeat={3}
    cursor={true}
  />
)
}
