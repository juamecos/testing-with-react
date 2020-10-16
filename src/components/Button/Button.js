import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, emitEvent }) => {
  const submitEvent = () => {
    emitEvent && emitEvent();
  };
  return (
    <button onClick={() => submitEvent()} data-test="buttonComponent">
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
