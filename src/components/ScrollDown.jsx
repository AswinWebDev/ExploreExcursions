import React from "react";

const ScrollDown = () => {
  const styledScrollDown = {
    position: "absolute",
    bottom: "3%",
    left: "6%",
    // transform: "translate(-50%, -50%)",
    // padding: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "	rgb(255, 255, 255,0.33)",
    color: "#fff",
    textTransform: "uppercase",

    fontSize: "0.6rem",
    letterSpacing: "0.1rem",
    transform: "rotate(270deg)",
  };
  return <div style={styledScrollDown}>Scroll Down</div>;
};

export default ScrollDown;
