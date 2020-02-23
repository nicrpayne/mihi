import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

// const mapStateToProps = reduxState => ({
//     reduxState
// })

class JournalEntryForm extends Component {

    state = {
        newEntry: {
            date: '',
            location: '',
            text: '',
            primaryId: '',
            secondaryId: '',
            tertiaryId: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value,
                primaryId: this.props.reduxState.displayEmotionEntriesReducer.primary.id,
                secondaryId: this.props.reduxState.displayEmotionEntriesReducer.secondary.id,
                tertiaryId: this.props.reduxState.displayEmotionEntriesReducer.tertiary.id
            }
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'POST_ENTRY',
            payload: this.state.newEntry
        })
        this.props.history.push(`/home`);
    }

    render() {
        // let emotionsReducer = this.props.reduxState.displayEmotionEntriesReducer
        return (
            
            <div>
                <form 
                className="journalEntryForm"
                onSubmit={this.handleClick}>
                    <label> Date </label>
                    <input value={this.state.newEntry.date} onChange={(event) => this.handleChangeFor('date', event)} />
                    <br />
                    <br />

                    <label> Location </label>
                    <input value={this.state.newEntry.location} onChange={(event) => this.handleChangeFor('location', event)} />
                    <br/>
                    <br />
                    <p className="emotion-list">{this.props.reduxState.displayEmotionEntriesReducer.primary.name} | {this.props.reduxState.displayEmotionEntriesReducer.secondary.name} | {this.props.reduxState.displayEmotionEntriesReducer.tertiary.name}</p>
                    
                    
                    <label> Add Entry </label>
                    <TextField 
                    multiline
                    rows='8'
                    margin='dense'
                    variant='outlined'
                    style={{width: 500}}
                    value={this.state.newEntry.text} 
                    onChange={(event) => this.handleChangeFor('text', event)} />
                    <br />
                    <input type="submit" onClick={this.handleClick} />
                </form>

                

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(JournalEntryForm)