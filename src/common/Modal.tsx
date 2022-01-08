import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import { Wattle, BalticSea } from "./Colors";
import HexagonContainer from "./HexagonContainer";

export type experience = {
  position: string;
  duration: string;
  company: string;
};

export interface ModalModel {
  name: string;
  position: string;
  picture: string;
  recommendation: number;
  skills_interest: Array<string>;
  proficient?: Array<string>;
  technologies?: Array<string>;
  related_experience?: Array<experience>;
}

interface ModalProps {
  content: ModalModel;
  height?: string;
  title?: string;
  width?: string;
  handleClose?: () => void;
  handleOpen?: () => void;
  open: boolean;
}

export default function TransitionsModal({
  content,
  height,
  title,
  width,
  handleClose,
  open,
}: ModalProps) {
  const useStyles = makeStyles(theme => ({
    modal: {
      fontFamily: "Poppins",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 30,
    },
    paper: {
      outline: "none",
      backgroundColor: "white",
      padding: 30,
      width: width ? width : "34%",
      minHeight: height ? height : "80%",
      zIndex: 10000000000,
      borderRadius: 30,
      position: "relative",
    },
    title: {
      fontSize: 18,
      fontFamily: "Poppins",
      margin: 0,
    },
    title2: {
      fontSize: 15,
      fontFamily: "Poppins",
      margin: 0,
    },
    description: {
      fontSize: 12,
      fontFamily: "Poppins",
      color: "#757575",
      margin: 0,
    },
    smallHeader: {
      fontSize: 12,
      fontFamily: "Poppins",
      color: Wattle,
      margin: 0,
    },
    descriptionSmall: {
      fontSize: 8,
      fontFamily: "Poppins",
      color: "#757575",
      margin: 0,
    },
    horizontalAlign: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      marginTop: 20,
      marginBottom: 20,
    },
    horizontalAlign2: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    verticalAlign: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 20,
      paddingRight: 20,
    },
  }));
  const classes = useStyles();

  console.log(content.skills_interest, "uuuuuuuuu");
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.horizontalAlign}>
              <HexagonContainer image={content.picture} />
              <div>
                <h2 className={classes.title}>{content.name}</h2>
                <p className={classes.description}>{content.position}</p>
                <Button>
                  <p className={classes.description}>
                    Recommendation: {content.recommendation}
                  </p>
                </Button>
              </div>
            </div>
            <h2 className={classes.title2}>Skills/Interest</h2>
            <div className={classes.horizontalAlign}>
              {content.skills_interest?.map(skill => (
                <Button>
                  <p className={classes.descriptionSmall}>{skill}</p>
                </Button>
              ))}
            </div>

            <h2 className={classes.title2}>Technologies</h2>
            <div className={classes.horizontalAlign}>
              {content.technologies?.map(skill => (
                <Button>
                  <p className={classes.descriptionSmall}>{skill}</p>
                </Button>
              ))}
            </div>

            <h2 className={classes.title2}>Proficiencies</h2>
            <div className={classes.horizontalAlign}>
              {content.proficient?.map(skill => (
                <Button>
                  <p className={classes.descriptionSmall}>{skill}</p>
                </Button>
              ))}
            </div>

            <h2 className={classes.title2}>Related Experience</h2>
            <div className={classes.horizontalAlign2}>
              {content.related_experience?.map(experience => (
                <div className={classes.verticalAlign}>
                  <p className={classes.smallHeader}>{experience.company}</p>
                  <p className={classes.description}>{experience.position}</p>
                  <p className={classes.description}>{experience.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
