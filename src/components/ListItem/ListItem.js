import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListItem extends Component {
  render() {
    const {title, description}=this.props;
    if(!title){
      return null;
    }
    return (<div data-test="ListItemComponent">
      <h3 data-test="ComponentTitle">{title}</h3>
      <p data-test="ComponentDescription">{description}</p>
    </div>);
  }
}
ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
