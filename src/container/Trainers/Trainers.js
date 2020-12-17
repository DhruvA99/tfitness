import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MainImage from "../../components/MainImage/MainImage";
import classes from "./Trainers.module.css";

class Trainers extends React.Component {
  render() {
    return (
      <div className={classes.main}>
        <NavBar />
        <MainImage />
        <span className={classes.inBetweenDiv}></span>
        <div className={classes.trainerMain}>
          <br />
          <h1>Our Star Trainers</h1>
          <div className={classes.flexContainer}>
            <div className="wow bounceInLeft" data-wow-delay=".5s">
              <div className={`${classes.item1} ${classes.item}`}>
                <h2 className={classes.heading}>Michael Stephen</h2>
                <p>
                  Lorem ipsum dolor sit amet, cum ei persius minimum, an his
                  corpora tractatos, viderer fabulas accumsan ad quo. Has
                  aliquid vivendo appetere ut, mei in everti evertitur. Dolorum
                  noluisse scaevola id qui, id mea mazim partiendo, in mel odio
                  nostrum oporteat. Id has solum eloquentiam disputationi.
                </p>
              </div>
            </div>
            <div className="wow bounceInRight" data-wow-delay=".5s">
              <div className={`${classes.item2} ${classes.item}`}>
                <h2 className={classes.heading}>Michael Stephen</h2>
                <p>
                  Lorem ipsum dolor sit amet, cum ei persius minimum, an his
                  corpora tractatos, viderer fabulas accumsan ad quo. Has
                  aliquid vivendo appetere ut, mei in everti evertitur. Dolorum
                  noluisse scaevola id qui, id mea mazim partiendo, in mel odio
                  nostrum oporteat. Id has solum eloquentiam disputationi.
                </p>
              </div>
            </div>
            <div className="wow bounceInLeft" data-wow-delay=".5s">
              <div className={`${classes.item3} ${classes.item}`}>
                <h2 className={classes.heading}>Michael Stephen</h2>
                <p>
                  Lorem ipsum dolor sit amet, cum ei persius minimum, an his
                  corpora tractatos, viderer fabulas accumsan ad quo. Has
                  aliquid vivendo appetere ut, mei in everti evertitur. Dolorum
                  noluisse scaevola id qui, id mea mazim partiendo, in mel odio
                  nostrum oporteat. Id has solum eloquentiam disputationi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Trainers;
