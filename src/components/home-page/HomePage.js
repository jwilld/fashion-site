import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "../nav/Nav";
import "./HomePage.css";
import TrndDisplay from "../trnd-display/TrndDisplay";
import { connect } from 'react-redux';
import Post from '../post/Post'

class HomePage extends Component {
  render() {
    console.log(this.props.data.displayPost)
    return (
      <div className="home-page">
        {/* {
          this.props.data.isLoggedIn === false ?
          <Redirect to ='/'/>
          :
          null
        } */}
        <div className='home-title'>
          <div className='home-title-text'>
            <span>trnd</span>
          </div>
        </div>
        <div className='trnd-display-container'>
          <TrndDisplay />
        </div>
        <div className='nav-container'>
          <Nav />
        </div>
        <div className='bottom-box'>
          <div className='post-container'>
            {this.props.data.displayPost === false ?
              null
              :
              <Post />
            }
          </div>
        </div>

      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(HomePage)
