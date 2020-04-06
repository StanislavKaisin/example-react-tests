import React, { Component } from "react";

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
export default HeadLine;
