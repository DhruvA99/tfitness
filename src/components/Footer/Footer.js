import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.item1}>
          <h1>
            About <span className={classes.colorChange}>T</span>Fitness
          </h1>
          <p className={classes.paragraphText}>
            TFitness was founded by Dhruv Arora in 1998 during his golden
            bodybuilding days. He always struggled to find the right advice from
            credible mentors, as the industry filled with fake gurus and
            bodybuilding products. Dhruv envisioned TFitness as the #1 source
            for fitness enthusiast. Now it serves as training grounds for people
            all over the country whom are trying to take their fitness journey's
            to the next level.
          </p>
          <p className={classes.paragraphText}>
            TFitness will be taking the next step in becoming a worldwide gym by
            opening 12 new locations all over the India in 2020.
          </p>
          <div className={classes.socialBar}></div>
        </div>
        <div className={classes.item2}>
          <h1 className={classes.colorChange}>Our Details</h1>
          <p>
            <b>Address:</b>123-block,d road,new delhi-000000
          </p>
          <p>
            <b>Email:</b>tfitness@da.com
          </p>
          <p>
            <b>Mobile:</b>91+9876543210
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
