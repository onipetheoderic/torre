import React, { FC } from "react";
import { useStyles } from "../../globals/pageStyles";
import Image from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image1.jpg";

import Toolbar from "../../components/Toolbar/Toolbar";

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <Toolbar />
      <div className={classes.wrapper}>
        <div className={classes.imagePortion}>
          <img src={Image} className={classes.banner} />
        </div>
        <div className={classes.textPortion}>
          <h1 className={classes.landingText}>
            Your matching network for work
          </h1>
          <span className={classes.description}>
            {" "}
            Torre makes the process of finding work and finding talent
            transparent and automated. We have a{" "}
            <span className={classes.towerText}>Tower</span> of Experienced
            Software Engineers across the world
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
