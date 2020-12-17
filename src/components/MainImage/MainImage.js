import React from "react";
import mainPicture from "../../Images/pexels-victor-freitas-841130.jpg";
import classes from "./MainImage.module.css";

const mainImage = () => {
  return (
    <>
      <img className={classes.image} src={mainPicture} />
      <span className={classes.text}>Unleash Your Potential</span>
    </>
  );
};

export default mainImage;
