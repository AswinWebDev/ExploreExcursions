import MenuIcon from "@mui/icons-material/Menu";
import "./Menu.css";
const Menu = ({ setIsOpened }) => {
  return (
    <div
      className="hamburger"
      onClick={() => {
        setIsOpened(true);
      }}
    >
      <MenuIcon />
    </div>
  );
};

export default Menu;
