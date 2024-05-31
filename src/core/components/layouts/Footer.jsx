import React, { Component } from "react";

export default class Footer extends Component {
  // bring the year value as per the current calendar

  render() {
    let year = new Date().getFullYear();
    return <>{year}</>;
  }
}
