import { makeStyles } from "@material-ui/core/styles";
import { BalticSea, White, Wattle } from "../common/Colors";

export const useStyles = makeStyles(theme => ({
  parent: {
    marginTop: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: BalticSea,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  wrapper: {
    width: "100%",
    height: "85%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  imagePortion: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  landingText2: {
    fontSize: 20,
    color: Wattle,
    textAlign: "center",
  },
  landingText3: {
    fontSize: 14,
    color: White,
    textAlign: "left",
  },
  landingText33: {
    fontSize: 14,
    color: White,
    textAlign: "left",
    marginBottom: 30,
  },
  engineersPortion: {
    width: "35%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 30,
    borderRight: `1px solid ${Wattle}`,
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  engineerTextPortion: {
    width: "65%",
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
  engineersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  description: {
    fontSize: 16,
    color: Wattle,
    textAlign: "center",
  },
  nameStyle: {
    fontSize: 12,
    color: Wattle,
    textAlign: "center",
    margin: 0,
  },
  professionStyle: {
    fontSize: 12,
    color: Wattle,
    textAlign: "center",
    margin: 0,
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
