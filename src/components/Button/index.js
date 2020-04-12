import React, { Component } from "react";
import PropTypes from "prop-types";

export class Button extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;
    // console.log('this.props=', this.props)
    // console.log('this.props.emitEvent=', this.props.emitEvent)
    return (
      <button
        data-test="buttonComponent"
        onClick={() => {
          // console.log('clicked')
          this.submitEvent();
        }}
      >
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default Button;
