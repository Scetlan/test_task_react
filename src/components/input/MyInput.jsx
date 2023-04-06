import React from "react";
import classes from "./StyleImput.module.css";

const MyInput = React.forwardRef((props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
});

export default MyInput;

