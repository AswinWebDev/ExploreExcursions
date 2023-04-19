import CottageIcon from "@mui/icons-material/Cottage";
const AboutPageContentBoxes = ({ color, heading, para, icon }) => {
  const styledContentBoxes = {
    // padding: "30px",
    paddingLeft: "10px",
    paddingRight: "30px",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: color,
    display: "flex",
    gap: "10px",
    color: "white",
    width: "300px",
    boxShadow: "4px 6px 0px 0px #d9d9d9",
  };
  const styledHeading = {
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };
  const styledPara = {
    marginTop: "10px",
    fontSize: "10px",
    letterSpacing: "1px",
    marginBottom: "10px",
  };

  return (
    <div style={styledContentBoxes}>
      <div>{icon}</div>
      <div>
        <h4 style={styledHeading}>{heading}</h4>
        <p style={styledPara}>{para}</p>
        <h4 style={styledHeading}>Learn More</h4>
      </div>
    </div>
  );
};

export default AboutPageContentBoxes;
