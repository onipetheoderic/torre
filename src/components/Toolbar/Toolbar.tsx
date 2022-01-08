import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Wattle } from "../../common/Colors";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToolbarStyles } from "./styles";

export default function MenuAppBar() {
  const classes = ToolbarStyles();
  const { addToast } = useToasts();
  const [showDrop, setShowDrop] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appStyle}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoText} onClick={() => history.push("/")}>
            torre
          </div>

          <div className={classes.menuItemsContainer}>
            <NavLink
              to="/engineers"
              exact
              className={classes.linkItemStyle}
              activeStyle={{ borderBottom: `4px solid ${Wattle}` }}
            >
              View list of Software engineers to hire
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
