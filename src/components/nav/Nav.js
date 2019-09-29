import React, { Component } from "react";
import "./Nav.css";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="username">
          <div>
            <FontAwesomeIcon className='user-icon' icon='user' />
          </div>
          <span>{this.props.data.userFirstName}</span>
        </div>
        <div className='sign-out'>
          <div>
            <FontAwesomeIcon className='sign-out-icon' icon='sign-out-alt' />
          </div>
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
