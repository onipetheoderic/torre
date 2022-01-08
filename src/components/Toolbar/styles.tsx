import { BalticSea, Brown, Wattle } from "../../common/Colors";
import { makeStyles } from "@material-ui/core/styles";

export const ToolbarStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 74,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  dropDownMenu: {
    marginTop: 60,
  },
  menuButton: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: Brown,
    },
    display: "none",
  },
  title: {
    flexGrow: 1,
    color: Brown,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      marginRight: 20,
    },
  },
  appStyle: {
    boxShadow: "none",
    height: 74,
    backgroundColor: BalticSea,
  },
  menuBtn: {
    width: 167,
    height: 35,
    border: "1px solid #707070",
    borderRadius: "18px",
    fontSize: 12,
    color: Brown,
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      width: 127,
      height: 35,
      fontSize: 10,
    },
  },
  iconStyle: {
    fontSize: 15,
    marginRight: 13,
  },
  menuItemsContainer: {
    height: 30,
    flexGrow: 3,
    marginRight: 41,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkItemStyle: {
    fontSize: 12,
    textDecoration: "none",
    marginRight: 30,
    fontFamily: "Poppins",
    textAlign: "center",
    color: Brown,
    paddingBottom: 27,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageDesign: {
    marginLeft: 20,
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: 30,
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
      marginLeft: 10,
    },
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dropMenu: {
    display: "flex",
    position: "absolute",
    width: 260,
    backgroundColor: "BalticSea",
    height: 300,
    top: 80,
    borderRadius: 10,
    boxShadow: "0px 3px 25px #00000029",
  },
  wrapper: {
    margin: 33,
  },
  logoText: {
    fontSize: 50,
    color: Wattle,
    cursor: "pointer",
  },
}));
