import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "../nav/Nav";
import "./HomePage.css";
import TrndDisplay from "../trnd-display/TrndDisplay";
import { connect } from 'react-redux';
import Post from '../post/Post'

class HomePage extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="home-page">

        {/* {
          this.props.data.isLoggedIn === false ?
          <Redirect to ='/'/>
          :
          null
        } */}
        <div className="top-container">
          <div className="homepage-title">
            <Link to='/' className='title-nav-text'>
              <h2>trnd</h2>
            </Link>
          </div>
          <div className="nav-container">
            <Nav />
            <Post/>
          </div>
        </div>
        <div className="trnd-container">
          <TrndDisplay />
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
