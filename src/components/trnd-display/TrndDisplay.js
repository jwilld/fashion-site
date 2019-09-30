import React, { Component } from 'react';
import './TrndDisplay.css'
import { connect } from 'react-redux'

class TrndDisplay extends Component {
    render() {
        let posts = this.props.data.posts
        let postDisplay = posts.map((post, i) => (
            <div key={i}>
                <img className='display-images' src={post.photo} alt={post.photo} />
            </div>
        ))
        return (
            <div className='photo-grid' >
                {postDisplay}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(TrndDisplay);