import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "../nav/Nav";
import "./HomePage.css";
import TrndDisplay from "../trnd-display/TrndDisplay";
import { connect } from 'react-redux';
import Post from '../post/Post'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      postPlus:false
    }
  }

  addPost = () => (
      this.setState({postPlus:!this.state.postPlus})

  )

  render() {
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
            {this.state.postPlus === true ?
            <Post />
            :
            null
            }
          </div>
          <div className='post-icons-container'>
            <div className='post-icons'>
            { this.state.postPlus === false ?
            <FontAwesomeIcon onClick ={this.addPost} className='add-post-icon' icon='plus-square' />
            :
            <FontAwesomeIcon onClick={this.addPost}  className='minimize-icon' icon='window-minimize' />
            }
            </div>
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
