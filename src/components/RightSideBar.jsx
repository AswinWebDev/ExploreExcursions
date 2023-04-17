import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

const RightSideBar = ({ setIsOpened, isOpened }) => {
  const styledMenu = {
    width: "25%",
    color: "black",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: "0",
    zIndex: "10",
    transition: "right 0.5s ease-in-out",
    right: isOpened ? "0" : "-400px",
  };
  const styledCloseIcon = {
    color: "#fff",
    fontSize: "2rem",
    marginLeft: "90%",
  };
  const styledMenuItems = {
    marginLeft: "-300px",
    overflow: "hidden",
    fontSize: "20px",
  };
  const styledBookTickets = {
    display: "block",
    marginBottom: "20px",
  };
  const styledAbout = {
    display: "block",
    marginBottom: "20px",
  };
  const styledContact = {
    display: "block",
  };
  return (
    <div style={styledMenu}>
      <div style={styledCloseIcon}>
        <div
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <CloseIcon />
        </div>
        <div style={styledMenuItems}>
          <span style={styledBookTickets}>Book Tickets</span>

          <span style={styledAbout}>About</span>
          <span style={styledContact}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
