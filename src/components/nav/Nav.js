import React, { Component } from "react";
import "./Nav.css";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { display_post, sign_out } from '../../actions/actions'


class Nav extends Component {
  constructor() {
    super();
    this.state = {
      postPlus: false
    }
  }


  addPost = () => (
    this.setState({ postPlus: !this.state.postPlus })

  )

  displayPost = () => {
    this.props.dispatch(display_post())
    this.addPost()
  }

  signOut = () => {
    this.props.dispatch(sign_out())
  }

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
            <FontAwesomeIcon onClick = {this.signOut} className='sign-out-icon' icon='sign-out-alt' />
          </div>
          <span>Sign Out</span>
        </div>
        <div className='post-picture'>

          {this.state.postPlus === false ?
            <div>
              <FontAwesomeIcon onClick={this.displayPost} className='add-post-icon' icon='plus-square' />
            </div>
            :
            <div>
              <FontAwesomeIcon onClick={this.displayPost} className='minimize-icon' icon='window-minimize' />
            </div>
          }
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
