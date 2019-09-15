import React, { Component } from 'react';
import './TrndDisplay.css'
import { connect } from 'react-redux'
import { get_posts } from '../../actions/actions'

class TrndDisplay extends Component {
    componentDidMount(){
        this.props.dispatch(get_posts())
    }
    render() {
        console.log(this.props)
        return (
            <div className='the-display'>
                <div >
                    the display
            </div>
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