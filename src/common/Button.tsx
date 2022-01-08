import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wattle } from "./Colors";

export interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  marginTop?: number;
}

export default function Button({
  children,
  bgColor,
  paddingTop,
  paddingBottom,
  marginTop,
}: ButtonProps) {
  const useStyles = makeStyles(theme => ({
    main: {
      minHeight: 20,
      backgroundColor: bgColor || Wattle,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      display: "flex",
      justifyContent: "center",
      borderRadius: 10,
      alignItems: "center",
      marginLeft: 3,
      marginRight: 3,
      marginTop: marginTop || 2,
    },
    wrapper: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
}
