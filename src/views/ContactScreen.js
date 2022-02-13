import React, { useState } from "react";
import { motion } from "framer-motion";
import FormContainer from "../components/FormContainer";
import Meta from "../components/Meta";

const ContactScreen = () => {
  const [inputData, setInputData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleClick = () => {
    setInputData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <Meta title={"My Cool App | Contact"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2>Contact</h2>
        <p>Do you have something to tell us?</p>
        <p className="mb-4">Fill the form below.</p>
      </motion.div>

      <FormContainer>
        <form onSubmit={submitHandler}>
          <motion.div
            className="mb-3"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label htmlFor="textInput" className="form-label">
              Your Name
            </label>
            <input
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              type="name"
              className="form-control"
              placeholder="Name"
              required
            />
          </motion.div>
          <motion.div
            className="mb-3"
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label htmlFor="textInput" className="form-label">
              Your Phone Number
            </label>
            <input
              value={inputData.phoneNumber}
              onChange={(e) =>
                setInputData({ ...inputData, phoneNumber: e.target.value })
              }
              type="name"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </motion.div>
          <motion.div
            className="mb-3"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              type="text"
              className="form-control"
              placeholder="Email"
              required
            />
          </motion.div>
          <motion.div
            className="mb-3"
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label htmlFor="formControlTextarea1" className="form-label">
              Your message
            </label>
            <textarea
              value={inputData.message}
              onChange={(e) =>
                setInputData({ ...inputData, message: e.target.value })
              }
              className="form-control"
              rows="6"
              placeholder="Type Here..."
              required
            ></textarea>
          </motion.div>
          <div className="bd-highlight">
            <motion.button
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="submit"
              initial={{ translateY: -1000 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sent Message
            </motion.button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      thank you for your message!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    We will get back to you soon!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleClick}
                    >
                      Ok!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default ContactScreen;
