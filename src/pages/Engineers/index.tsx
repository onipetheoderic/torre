import React, { FC } from "react";
import { useStyles } from "../../globals/pageStyles";
import Toolbar from "../../components/Toolbar/Toolbar";
import HexagonContainer from "../../common/HexagonContainer";
import Modal, { ModalModel } from "../../common/Modal";
import { userDetails } from "./dummy";
import { BASEURL } from "../../common/constant";
import fetch from "unfetch";
import useSWR from "swr";

const Engineers: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<ModalModel>({
    name: "",
    position: "",
    recommendation: 0,
    picture: "",
    skills_interest: [],
    proficient: [],
    technologies: [],
    related_experience: [],
  });

  const fetcher = (url: any) => fetch(url).then(r => r.json());
  const { data, error } = useSWR(`${BASEURL}/api/developers`, fetcher);

  const handleOpen = (user: ModalModel) => {
    setOpen(true);
    setCurrentUser({
      name: user.name,
      position: user.position,
      recommendation: user.recommendation,
      picture: user.picture,
      skills_interest: user.skills_interest,
      proficient: user.proficient,
      technologies: user.technologies,
      related_experience: user.related_experience,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const content: ModalModel = {
    name: currentUser.name,
    position: currentUser.position,
    recommendation: currentUser.recommendation,
    picture: currentUser.picture,
    skills_interest: currentUser.skills_interest,
    proficient: currentUser.proficient,
    technologies: currentUser.technologies,
    related_experience: currentUser.related_experience,
  };

  return (
    <div className={classes.parent}>
      <Toolbar />
      {open && (
        <Modal
          title="Bedroom"
          open={open}
          handleClose={handleClose}
          content={content}
        />
      )}
      <div className={classes.wrapper}>
        <div className={classes.engineersPortion}>
          <h1 className={classes.landingText2}>
            You're 3 steps away from getting a professional
          </h1>

          <h1 className={classes.landingText3}>
            1. Select or Search from the List of Professional Engineers
          </h1>
          <h1 className={classes.landingText3}>
            2. View the engineer's profile and skills
          </h1>
          <h1 className={classes.landingText3}>
            3. Click the select button if he/she goes with your taste
          </h1>
        </div>
        <div className={classes.engineerTextPortion}>
          <h1 className={classes.landingText33}>
            Our List of Outstanding Engineers currently Available
          </h1>
          <div className={classes.engineersContainer}>
            {userDetails.map(user => (
              <HexagonContainer
                image={user.picture}
                name={user.name}
                profession={user.position}
                onClick={() =>
                  handleOpen({
                    name: user.name,
                    position: user.position,
                    picture: user.picture,
                    recommendation: user.recommendation,
                    skills_interest: user.skills_interest,
                    proficient: user.proficient,
                    technologies: user.technologies,
                    related_experience: user.related_experience,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineers;
