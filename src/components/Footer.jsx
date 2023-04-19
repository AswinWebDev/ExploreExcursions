import CottageIcon from "@mui/icons-material/Cottage";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const styledFooter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "100px",
    marginBottom: "50px",
  };
  const styledHeader = {
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };
  const styledSub = {
    fontSize: "12px",
    opacity: 0.65,
  };
  const styledIcon = {
    color: "coral",
  };
  return (
    <div style={styledFooter}>
      <div className="footer1">
        <div style={styledIcon}>
          <CottageIcon />
        </div>
        <div style={styledHeader}>Head Office</div>
        <div style={styledSub}>1234, Main Street, New York, USA</div>
      </div>
      <div className="footer1">
        <div style={styledIcon}>
          <CallIcon />
        </div>
        <div style={styledHeader}>Call Us</div>
        <div style={styledSub}>(+51) 350-1922</div>
      </div>
      <div className="footer1">
        <div style={styledIcon}>
          <EmailIcon />
        </div>
        <div style={styledHeader}>Email Us</div>
        <div style={styledSub}>exploreexcursion@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
