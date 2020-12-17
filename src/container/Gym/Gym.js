import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import MainImage from "../../components/MainImage/MainImage";
import Footer from "../../components/Footer/Footer";
import classes from "./Gym.module.css";
import gymImage1 from "../../Images/brett-jordan-Xt-puzExlKQ-unsplash.jpg";
import gymImage2 from "../../Images/jelmer-assink-gzeTjGu3b_k-unsplash.jpg";
import gymImage3 from "../../Images/luis-reyes-mTorQ9gFfOg-unsplash.jpg";

class Gym extends React.Component {
  render() {
    return (
      <div className={classes.main}>
        <NavBar />
        <MainImage className={classes.mainImage} />
        <div className={classes.mainGymContainer}>
          <h1>LOCATIONS WE ARE AT</h1>
          <div className=" items-gym wow zoomIn " data-wow-delay="0.4s">
            <div className={classes.flexContainer}>
              <div className={`${classes.item3} ${classes.item}`}>
                <img className={classes.image} src={gymImage1} alt="gym" />
                <div className={classes.details}>
                  <h2>Vasant Kunj,Delhi</h2>
                  <p>123,a-road,Vasant Kunj,Delhi</p>
                </div>
              </div>

              <div className={`${classes.item3} ${classes.item}`}>
                <img className={classes.image} src={gymImage2} alt="gym" />
                <div className={classes.details}>
                  <h2>Shalimar Bagh,Delhi</h2>
                  <p>128,b-road,Shalimar Bagh,Delhi</p>
                </div>
              </div>

              <div className={`${classes.item3} ${classes.item}`}>
                <img className={classes.image} src={gymImage3} alt="gym" />
                <div className={classes.details}>
                  <h2>Meerut,UP</h2>
                  <p>124,Mall Road,Meerut,UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Gym;
