import React from "react";
import aboutHeaderImage from "../assets/aboutHeader.jpg";

const AboutPageHeader = () => {
  const styledHeader = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "40vh",
    width: "100%",
    backgroundImage: `url(${aboutHeaderImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    clipPath:
      "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 76%, 71% 100%, 21% 79%, 0 100%, 0% 85%)",
    zIndex: 2,
  };
  const styledHeader2 = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "50vh",
    width: "100%",
    backgroundImage: `url(${aboutHeaderImage})`,
    backgroundSize: "cover",
    opacity: 0.5,
    backgroundPosition: "top",
    clipPath:
      "polygon(50% 0%, 100% 0, 100% 35%, 100% 58%, 100% 60%, 65% 100%, 34% 89%, 0 80%, 0 36%, 0 0)",
    zIndex: 1,
  };
  const styledAboutTitle = {
    position: "absolute",
    top: "2%",
    left: "20%",
    transform: "translate(-0%, 40%)",
    color: "white",
    fontSize: "3rem",
    zIndex: 3,
    fontWeight: "bold",
  };
  const styledAboutPara = {
    fontSize: "1rem",
    opacity: 0.65,
  };
  const styledAboutNo = {
    position: "absolute",
    bottom: "-170px",
    // top: "20%",
    left: "45%",
    transform: "translate(-0%, 40%)",
    color: "white",
    fontSize: "0.8rem",
    zIndex: 3,
    padding: "0.6rem",
    backgroundColor: "coral",
    boxShadow: "0px 1px 2px 0px #d9d9d9",
  };
  return (
    <div>
      <div style={styledHeader}></div>
      <div style={styledHeader2}></div>
      <div style={styledAboutTitle} className="aboutTilte">
        <div>About Us</div>
        <div style={styledAboutPara}>
          Your full service travel guide Since 2010
        </div>
      </div>
      {/* about no */}
      <div style={styledAboutNo}>Call (+51) 350-1922</div>
      {/* about no */}
    </div>
  );
};

export default AboutPageHeader;
