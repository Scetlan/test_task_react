import React from "react";

const MyButton = ({text, ...posts}) => {
    return (
        <button {...posts}>
            {text}
        </button>
    );
}

export default MyButton;