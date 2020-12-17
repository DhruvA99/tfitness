import React from "react";
import MainImage from "../../components/MainImage/MainImage";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import dumbbell from "../../Images/dumbbell.png";
import personal from "../../Images/personal.png";
import chronometer from "../../Images/chronometer.png";
import PricingComponent from "../../components/PricingComponent/PricingComponent";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

class Home extends React.Component {
  state = {
    modalOpen: false,
  };

  onClickHandler = () => {
    this.props.history.push("/form");
  };
  submitClicked = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  };

  render() {
    return (
      <div className={classes.main}>
        <Navbar />
        <MainImage className={classes.mainImage} />
        <div className={classes.secondNav}>
          <p className={classes.secondNavText1}>Get Started Today! </p>
          <button
            onClick={() => this.onClickHandler()}
            className={classes.secondNavButton}
          >
            Join Now
          </button>
        </div>
        <div className="wow zoomIn" data-wow-delay="0.6s">
          <div className={classes.thirdDiv}>
            <br />
            <h2>Why join with us?</h2>
            <hr className={classes.horizontalLine} />
            <p>Because we will get the best out of you!</p>
            <div className={classes.thirdDivContainer}>
              <div className={classes.containerComponent}>
                <img className={classes.icon} src={dumbbell} alt="icon" />
                <h2>Biggest Gyms</h2>
                <p>
                  Our gyms come with a variety of sections for all types of
                  athletes. They range from tennis courts, basketball courts,
                  swimming pools and gymnasiums.
                </p>
              </div>
              <div className={classes.containerComponent}>
                <img className={classes.icon} src={personal} alt="icon" />
                <h2>Experienced Personal Trainers</h2>
                <p>
                  The trainers at Python Fitness have over 10 years of
                  experience in fitness. You'll get your pick of trainer to best
                  fit your training style and personality.
                </p>
              </div>
              <div className={classes.containerComponent}>
                <img className={classes.icon} src={chronometer} alt="icon" />
                <h2>Best Programs</h2>
                <p>
                  Courses engineered by top athletes from many sports all being
                  thought by our instructors. To ensure you get the best raining
                  in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PricingComponent />
        </div>
        <div className="wow fadeIn" data-wow-delay="0.6s">
          <ContactUsForm submitClicked={this.submitClicked} />
          {this.state.modalOpen ? (
            <Modal
              onclick={this.submitClicked}
              message="Thanks for your Details.Will Contact you shortly!"
            />
          ) : null}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
