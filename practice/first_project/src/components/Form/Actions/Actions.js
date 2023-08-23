import React, { useState } from "react";
import styles from "./Actions.module.css";

const Actions = (props) => {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt} onClick={props.onReset}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default Actions;
