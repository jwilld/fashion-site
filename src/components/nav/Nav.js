import React, { Component } from "react";
import "./Nav.css";
import { connect } from 'react-redux';


class Nav extends Component {
  render() {
  return(
    <div className="nav">
      <div className="username">
        <span>{this.props.data.userFirstName}</span>
      </div>
      <div className='sign-out'>
        <span>Sign Out</span>
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
