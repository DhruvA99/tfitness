import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./ContactUsForm.module.css";

const ContactUsForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const submitHandler = () => {
    if (name !== "" && email !== "" && message !== "" && subject !== "") {
      props.submitClicked();
    } else {
      setModalOpen(!modalOpen);
    }
  };

  return (
    <div>
      <br />
      <h2>Contact Us</h2>
      <hr className={classes.horizontalLine} />
      <p>Need to get in touch? Fill in the form below for more information</p>
      <div className={classes.container}>
        <input
          name="email"
          className={classes.email}
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="name"
          className={classes.name}
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="subject"
          className={classes.subject}
          placeholder="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="message"
          className={classes.message}
          placeholder="message"
          type="textbox"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {modalOpen ? (
          <Modal
            onclick={submitHandler}
            message="Please fill all the details"
          />
        ) : null}

        <button className={classes.button} onClick={submitHandler}>
          Submit
        </button>
      </div>
      <br />
    </div>
  );
};

export default ContactUsForm;
