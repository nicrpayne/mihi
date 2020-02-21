import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Edit extends Component {

    // Sets local movie state to handle input changes
    state = {
        editedEntry: {

            journal_text: '',

        }
    }

    // Updates local state with input changes
    handleChange = (event, property) => {
        console.log('event happened')
        this.setState({
            editedMovie: {
                ...this.props.selectedMovieDetailsReducer,
                [property]: event.target.value,
            }
        });
    }

    // Dispatch action to selectedMovieSaga & selectedMovieGenresSaga to get specific movie details
    // Route to '/details/id'
    cancelEdit = (id) => {
        console.log('cancel clicked with id: ', id);
        this.props.dispatch({
            type: 'FETCH_ENTRIES',
            payload: id
        })
        this.props.history.push(`/edit/${id}`);
    }

    // Dispatch action UPDATE MOVIE to run editMovieSaga that updates server
    // Routes back to home
    saveEdit = (id) => {
        console.log('saveEdit dispatch payload: ', this.state.editedEntry);
        this.props.dispatch({
            type: 'EDIT_ENTRY',
            payload: this.state.editedEntry
        });
        // this.props.history.push(`/edit/${id}`);
    }

    render() {
        return (
            <div className="Edit">
                    <p>Hello World!</p>
                    {/* {this.props.reduxState.setEntryDetailsReducer.id} */}
                        {/* <button onClick={() => this.cancelEdit(this.props.selectedMovieDetailsReducer.id)} >Cancel</button>
                        <button onClick={() => this.saveEdit(this.props.selectedMovieDetailsReducer.id)} >Save</button> */}
                {/* <input>{this.props.reduxState.setEntryDetailsReducer.journal_text}</input> */}
               
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.selectedMovieDetailsReducer, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(Edit));
