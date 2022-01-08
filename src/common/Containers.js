import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Nero, WhiteLilac } from '../common/Colors';

export const Container = ({
  fontSize,
  color,
  fontWeight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  children,
  width,
  height,
  justifyContent,
  flexDirection,
  alignItems,
  borderTop,
  borderColor,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  bgColor,
  cursor,
  onClick,
}) => {
  const useStyles = makeStyles(theme => ({
    contStyle: {
      backgroundColor: bgColor ? bgColor : 'white',
      fontSize: fontSize ? fontSize : 10,
      color: color ? color : Nero,
      fontWeight: fontWeight ? fontWeight : '600',
      marginBottom,
      borderRadius: borderRadius ? 30 : 0,
      marginTop,
      justifyContent: justifyContent,
      marginLeft,
      marginRight,
      alignItems,
      width,
      height,
      cursor,
      display: 'flex',
      flexDirection: flexDirection ? flexDirection : 'row',
      borderBottom: borderBottom
        ? `1px solid ${borderColor ? borderColor : WhiteLilac}`
        : 'none',
      borderTop: borderTop
        ? `1px solid ${borderColor ? borderColor : WhiteLilac}`
        : 'none',
      borderLeft: borderLeft
        ? `1px solid ${borderColor ? borderColor : WhiteLilac}`
        : 'none',
      borderRight: borderRight
        ? `1px solid ${borderColor ? borderColor : WhiteLilac}`
        : 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
    },
  }));
  const classes = useStyles();
  return (
    <span className={classes.contStyle} onClick={onClick}>
      {children}
    </span>
  );
};
