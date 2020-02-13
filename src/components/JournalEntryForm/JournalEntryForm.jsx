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
            text: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'POST_ENTRY',
            payload: this.state.newEntry
        })
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label> Add Entry </label>
                <input value={this.state.newEntry.text} onChange={(event) => this.handleChangeFor('text', event)} />
                <br />
                <label> Date </label>
                <input value={this.state.newEntry.date} onChange={(event) => this.handleChangeFor('date', event)} />
                <br />
                <label> Location </label>
                <input value={this.state.newEntry.location} onChange={(event) => this.handleChangeFor('location', event)} />
                <input type="submit" onClick={this.handleClick} />
            </form>
        )
    }
}

export default connect()(JournalEntryForm)