import React from "react";
import classes from "./PricingComponent.module.css";
import { withRouter } from "react-router-dom";

const pricingComponent = (props) => {
  const onClickHandler = () => {
    props.history.push("/form");
  };
  return (
    <div className={classes.main}>
      <br />
      <h1>Pricing</h1>
      <hr className={classes.horizontalLine} />
      <p>Pricing structure for our service that cannot be beaten...</p>
      <div className={classes.flex_container}>
        <div className={`${classes.item1} ${classes.item}`}>
          <h4 className={classes.title}>Basic</h4>
          <p className={classes.content}>
            <b>1</b> Pass
          </p>
          <p className={classes.content}>
            <b>&#8377;800</b> /month
          </p>
          <p className={classes.content}>
            <b>Machine</b> Access
          </p>
          <p className={classes.content}>
            <b>0</b> Trainers
          </p>
          <p className={classes.content}>
            <b>0</b> Perks
          </p>
          <p className={classes.content}>
            <button
              onClick={() => onClickHandler()}
              className={` ${classes.button}`}
            >
              SignUp
            </button>
          </p>
        </div>
        <div className={`${classes.item2} ${classes.item}`}>
          <h4 className={classes.title}>Standard</h4>
          <p className={classes.content}>
            <b>2</b> Passes
          </p>
          <p className={classes.content}>
            <b>&#8377;1600</b> /month
          </p>
          <p className={classes.content}>
            <b>Full</b> Access
          </p>
          <p className={classes.content}>
            <b>1</b> Trainer
          </p>
          <p className={classes.content}>
            <b>2</b> Perks
          </p>
          <p className={classes.content}>
            <button
              onClick={() => onClickHandler()}
              className={` ${classes.button}`}
            >
              SignUp
            </button>
          </p>
        </div>
        <div className={`${classes.item3} ${classes.item}`}>
          <h4 className={classes.title}>Pro</h4>
          <p className={classes.content}>
            <b>3</b> Pass
          </p>
          <p className={classes.content}>
            <b>&#8377;3000</b> /month
          </p>
          <p className={classes.content}>
            <b>Full</b> Access
          </p>
          <p className={classes.content}>
            <b>5</b> Trainers
          </p>
          <p className={classes.content}>
            <b>7</b> Perks
          </p>
          <p className={classes.content}>
            <button onClick={() => onClickHandler()} className={classes.button}>
              SignUp
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(pricingComponent);
