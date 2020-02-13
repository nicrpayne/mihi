import React, { Component } from 'react';
import { connect } from 'react-redux'

// const mapStateToProps = reduxState => ({
//     reduxState
// })

class JournalEntryForm extends Component {

    state = {
        newEntry: {
            date: '',
            location: '',
            primaryEmotionId: '',
            secondaryEm
        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            newEntry: {
                ...this.state.newBook,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'POST_BOOKS',
            payload: this.state.newBook
        })
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label> Add Book </label>
                <input value={this.state.newBook.description} onChange={(event) => this.handleChangeFor('description', event)} />
                <br />
                <label> img url </label>
                <input value={this.state.newBook.image_url} onChange={(event) => this.handleChangeFor('image_url', event)} />
                <input type="submit" onClick={this.handleClick} />
            </form>
        )
    }
}

export default connect(mapStateToProps)(BookForm)