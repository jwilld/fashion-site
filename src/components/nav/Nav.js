import React, { Component } from "react";
import "./Nav.css";
import { connect } from 'react-redux';


class Nav extends Component {
  render() {
  return(
    <div className="nav">
      <div className="username">
        <h2>UserName</h2>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Nav);
