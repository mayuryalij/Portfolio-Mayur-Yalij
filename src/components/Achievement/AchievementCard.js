import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, link, date, field }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <div key={id} className={`achievement-card ${classes.achievementCard}`}>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: theme.tertiary }}>{title}</h2>

            <a   style={{ color: theme.primary }}
            href={link} target="_blank" rel="noreferrer">
              <h3>
                <u><i>See credential</i></u>
              </h3>
            </a>
          </div>
          <div
            className="achievecard-details2"
            style={{ color: theme.primary }}
          >
            <h5>{date}</h5>
            <div className="achievecard-field">
              <AiOutlineFolder />
              <h5>{field}</h5>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
