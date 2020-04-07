import React, { Component } from "react";
import PropTypes from 'prop-types'

class HeadLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, description } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadLineComponent">
        <h2 data-test="header">{header}</h2>
        <p data-test="description">{description}</p>
        {/* headLine */}
      </div>
    );
  }
}

HeadLine.propTypes={
  header: PropTypes.string,
  description:PropTypes.string,
  tempArray: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool,
  }))
}

export default HeadLine;
