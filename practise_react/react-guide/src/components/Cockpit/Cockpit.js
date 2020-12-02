import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1> THis is about switching Name.</h1>
      <button className={styles.Button} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
