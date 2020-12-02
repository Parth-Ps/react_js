import React from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name} with {props.age} year old.
        <span> {props.children} </span>
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default withClass(person);
