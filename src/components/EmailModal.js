import React, { useState } from "react";
import { X } from "@styled-icons/feather";
import styles from "./EmailModal.module.scss";

const EmailModal = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    let re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (re.test(email)) {
      handleClose();
    } else {
      setHasError(true);
    }
  };

  const handleChange = (text) => {
    setHasError(false);
    setEmail(text);
  };

  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <div className={styles.titleBox}>
          <h4 className={styles.title}>Blog</h4>
          <X size={24} onClick={handleClose} />
        </div>
        <p className={styles.text}>
          Provide your email below to get exclusive new offers on shoes, garmets
          and devices.
        </p>
        <div className={styles.inputBox}>
          <form>
            <input
              type="email"
              className={styles.input}
              value={email}
              name="name"
              placeholder="john@gmail.com"
              onChange={(event) => handleChange(event.target.value)}
            />
            <button
              type="submit"
              className={styles.button}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={styles.errorBox}>
          {hasError && (
            <p className={styles.errorText}>
              The email provided is not a valid email adress
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
