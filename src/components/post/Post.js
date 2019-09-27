import React, { Component } from 'react'
import './Post.css'
import { connect } from 'react-redux'
import { make_post,get_posts } from '../../actions/actions'


class Post extends Component {
    handleSubmit = e => {
        let formFields = this.props.data.postFields
        e.preventDefault()
        let form = new FormData(e.target)
        let post = {}
        formFields.forEach(field => post[field] = form.get(field))
        this.props.dispatch(make_post(post))
        .then(
            this.props.dispatch(get_posts())
            .catch(e => console.log(e))
        )
        document.getElementById('post-form').reset()

    }


    render() {
        let formFields = this.props.data.postFields
        let postForm = formFields.map((field,i ) => (
            <div className='post' key={i}>
                <span className='field-label'>{field}</span>
                <input className='post-input' name={field}></input>
            </div>
        ))
        return (
            <div className='post-container' onSubmit={this.handleSubmit}>
                <h1> POST </h1>
                <div className='post-form-container'>
                <form id ='post-form'>
                    {postForm}
                    <input className='submit-button' type='submit'></input>
                </form>

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
export default connect(mapStateToProps)(Post)