import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import MainImage from "../../components/MainImage/MainImage";
import Footer from "../../components/Footer/Footer";
import classes from "./DetailForm.module.css";
import Modal from "../../components/Modal/Modal";

class DetailForm extends React.Component {
  state = {
    isModalOpen: false,
    name: "",
    email: "",
    password: "",
    biography: "",
    user_program: "",
    user_gender: "",
    user_access: [
      { id: 1, value: "trainers", isChecked: false },
      { id: 2, value: "spa", isChecked: false },
      { id: 3, value: "exercise_programs", isChecked: false },
    ],
    modalMessage: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    userProgramError: "",
    userGenderError: "",
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let userProgramError = "";
    let userGenderError = "";

    if (!this.state.name) {
      nameError = "Name cannot be empty!";
    }
    if (!this.state.email || !this.state.email.includes("@")) {
      emailError = "invalid Email";
    }
    if (!this.state.password) {
      passwordError = "Password cannot be empty!";
    }
    if (this.state.password.length < 4) {
      passwordError = "Password too short";
    }
    if (!this.state.user_program) {
      userProgramError = "Please select a program!";
    }
    if (!this.state.user_gender) {
      userGenderError = "Please select a gender";
    }
    if (
      nameError ||
      emailError ||
      passwordError ||
      userGenderError ||
      userProgramError
    ) {
      this.setState({
        nameError,
        emailError,
        passwordError,
        userProgramError,
        userGenderError,
      });
      return false;
    }
    return true;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    let Valid = this.validate();
    console.log(Valid);
    if (Valid) {
      this.setState((prevState) => {
        return {
          isModalOpen: !prevState.isModalOpen,
          modalMessage:
            "Thanks for signing up with us!.We will reach you shortly",
        };
      });
      //clear the form
      this.setState({
        nameError: "",
        emailError: "",
        passwordError: "",
        userGenderError: "",
        userProgramError: "",
      });
    }
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCheckboxCheckHandler = (e) => {
    let userAccess = this.state.user_access;
    userAccess.forEach((item) => {
      if (item.value === e.target.value) {
        const itemisChecked = item.isChecked;
        item.isChecked = !itemisChecked;
      }
    });
    this.setState({ user_access: userAccess });
  };
  render() {
    return (
      <div className={classes.main}>
        <NavBar />
        <MainImage />
        {this.state.isModalOpen ? (
          <Modal
            message={this.state.modalMessage}
            onclick={(e) => this.onSubmitHandler(e)}
          />
        ) : null}
        <br />
        <h1>Sign Up</h1>
        <form className={classes.form}>
          <fieldset className={classes.fieldset}>
            <legend>
              <span className={classes.number}>1</span>
              <b style={{ fontSize: "20px" }}>Create Account</b>
            </legend>
            <br />
            <div className={classes.container}>
              <label className={classes.label} for="name">
                Name:{" "}
              </label>
              <input
                className={classes.input}
                name="name"
                type="text"
                value={this.state.name}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <div className={classes.error}>{this.state.nameError}</div>
              <label className={classes.label} for="email">
                Email:
              </label>
              <input
                className={classes.input}
                name="email"
                type="email"
                value={this.state.email}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <div className={classes.error}>{this.state.emailError}</div>
              <label className={classes.label} for="password">
                Password
              </label>
              <input
                className={classes.input}
                name="password"
                type="password"
                value={this.state.password}
                onChange={(e) => this.onChangeHandler(e)}
              />
              <div className={classes.error}>{this.state.passwordError}</div>
              <label className={classes.label} for="biography">
                Biography:{" "}
              </label>
              <textarea
                value={this.state.biography}
                className={classes.input}
                name="biography"
                onChange={(e) => this.onChangeHandler(e)}
              ></textarea>
            </div>
          </fieldset>

          <fieldset className={classes.fieldset}>
            <legend>
              <span className={classes.number}>2</span>{" "}
              <b style={{ fontSize: "20px" }}>Create Profile</b>
            </legend>
            <br />
            <div className={classes.container}>
              <label className={classes.label}>Program:</label>
              <div className={classes.insideContainer}>
                <select
                  className={classes.input}
                  name="user_program"
                  onChange={(e) => this.onChangeHandler(e)}
                  value={this.state.user_program}
                >
                  <optgroup label="Exercise Programs">
                    <option value="bodybuilding">Bodybuilding</option>
                    <option value="crossfit">CrossFit</option>
                    <option value="yoga">Yoga</option>
                    <option value="cycling">Cycling</option>
                  </optgroup>
                  <optgroup label="Spa">
                    <option value="Meditation">Meditation</option>
                    <option value="tanning">Tanning</option>
                    <option value="massage">Massage</option>
                    <option value="salt-bath">Salt Bath</option>
                  </optgroup>
                </select>
              </div>
              <div className={classes.error}>{this.state.userProgramError}</div>
              <label className={classes.label}>Gender:</label>
              <div className={classes.insideContainer}>
                <input
                  className={classes.checkBox}
                  type="radio"
                  name="user_gender"
                  value="male"
                  onChange={(e) => this.onChangeHandler(e)}
                />
                <label for="male">Male</label>
                <input
                  className={classes.checkBox}
                  type="radio"
                  name="user_gender"
                  value="female"
                  onChange={(e) => this.onChangeHandler(e)}
                />
                <label for="female">Female</label>
              </div>
              <div className={classes.error}>{this.state.userGenderError}</div>
              <label className={classes.label}>Access:</label>
              <div className={classes.insideContainer}>
                <input
                  type="checkbox"
                  value="trainers"
                  name="user_access"
                  className={classes.checkBox}
                  onChange={(e) => this.onCheckboxCheckHandler(e)}
                />
                <label for="trainers">Trainers</label>{" "}
                <input
                  type="checkbox"
                  value="spa"
                  name="user_access"
                  className={classes.checkBox}
                  onChange={(e) => this.onCheckboxCheckHandler(e)}
                />
                <label for="spa">Spa</label>{" "}
                <input
                  className={classes.checkBox}
                  type="checkbox"
                  value="exercise_programs"
                  name="user_access"
                  onChange={(e) => this.onCheckboxCheckHandler(e)}
                />
                <label for="exercise_programs">Exercise Programs</label>
              </div>
              <button
                className={classes.button}
                onClick={(e) => this.onSubmitHandler(e)}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <Footer />
      </div>
    );
  }
}

export default DetailForm;
