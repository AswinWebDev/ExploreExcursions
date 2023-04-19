import aboutHeaderImage from "../assets/aboutHeader.jpg";
import contactImage from "../assets/contact.jpg";

const ContactFooter = () => {
  const styledHeader = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "90vh",
    width: "100%",
    backgroundImage: `url(${contactImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    clipPath:
      "polygon(34% 0, 83% 14%, 100% 0, 100% 97%, 73% 86%, 0 100%, 0% 70%, 0 17%)",
    zIndex: 2,
  };
  const styledHeader2 = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${contactImage})`,
    backgroundSize: "cover",
    opacity: 0.5,
    backgroundPosition: "top",
    clipPath:
      "polygon(42% 0, 100% 11%, 100% 0, 100% 97%, 75% 93%, 25% 100%, 0 94%, 0 17%)",
    zIndex: 1,
  };
  const styledAboutTitle = {
    position: "absolute",
    top: "2%",
    left: "20%",
    transform: "translate(-0%, 100%)",
    color: "white",
    fontSize: "3rem",
    zIndex: 3,
    fontWeight: "bold",
    width: "700px",
  };
  const styledAboutPara = {
    fontSize: "1rem",
    opacity: 0.65,
  };
  const styledAboutNo = {
    position: "absolute",
    bottom: "-410px",
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
        <div>Landscape, Beaches, Forest, You name it, We'll be there</div>
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

export default ContactFooter;
