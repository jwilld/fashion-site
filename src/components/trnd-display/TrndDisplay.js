import React, { Component } from 'react';
import './TrndDisplay.css'
import { connect } from 'react-redux'
import { get_posts } from '../../actions/actions'

class TrndDisplay extends Component {
    componentDidMount(){
        this.props.dispatch(get_posts())
        console.log(this.props.data.posts)
    }
    render() {
        let posts = this.props.data.posts
        let postDisplay = posts.map((post,i ) => (
                <div key={i}>
                    <img className= 'display-images' src={post.photo} alt={post.photo} />
            </div>
        ))
        return (
            // <div className='the-display'>
                <div className='photo-grid' >
                    {postDisplay}
            {/* </div> */}
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