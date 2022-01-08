import React from "react";
import { useStyles } from "../globals/pageStyles";

import "./styles.css";

interface HexagonProps {
  image: string;
  name?: string;
  profession?: string;
  onClick?: () => void;
}

const HexagonContainer = (props: HexagonProps) => {
  const classes = useStyles();
  return (
    <div onClick={props.onClick}>
      <div className="hex">
        <div className="hex-background">
          <img src={props.image} />
        </div>
      </div>
      <div>
        <p className={classes.nameStyle}>{props.name}</p>
        <p className={classes.professionStyle}>{props.profession}</p>
      </div>
    </div>
  );
};

export default HexagonContainer;
