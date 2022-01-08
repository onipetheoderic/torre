import { makeStyles } from "@material-ui/core/styles";
import { BalticSea, White, Wattle } from "../../common/Colors";
import Image2 from "../../assets/images/image2.jpg";

export const useStyles = makeStyles(theme => ({
  parent: {
    marginTop: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: BalticSea,
  },
  wrapper: {
    width: "100%",
    height: "85%",
    display: "flex",
    flexDirection: "row",
  },
  imagePortion: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  textPortion: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
      marginRight: 20,
      width: "100%",
    },
  },
  landingText: {
    fontSize: 40,
    color: White,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: Wattle,
    textAlign: "center",
  },
  towerText: {
    fontSize: 20,
    color: White,
    textAlign: "center",
  },
  banner: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
