import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Edit extends Component {

    

    // Updates local state with input changes
    handleChange = (event) => {
        console.log('event happened', event)
        console.log(this.props.reduxState.setEntryDetailsReducer);
        
        this.props.dispatch({
            type: 'EDIT_ENTRY',
            payload: {
                id: this.props.reduxState.setEntryDetailsReducer.id,
                info: event.target.value,
        }});

        // this.setState({
        //     editedMovie: {
        //         ...this.props.selectedMovieDetailsReducer,
        //         [property]: event.target.value,
        //     }
        // });
    }

    // Dispatch action to selectedMovieSaga & selectedMovieGenresSaga to get specific movie details
    // Route to '/details/id'
    cancelEdit = (id) => {
        console.log('cancel clicked with id: ', id);
        this.props.dispatch({
            type: 'FETCH_ENTRIES',
            payload: id
        })
        // this.props.history.push(`/edit/${id}`);
    }

    // Dispatch action UPDATE MOVIE to run editMovieSaga that updates server
    // Routes back to home
    saveEdit = () => {
        console.log('saveEdit dispatch payload: ');
        this.props.dispatch({
            type: 'EDIT_ENTRY',
            payload: {
                
                id: this.props.reduxState.setEntryDetailsReducer.id,
                savedEdit: ''
            
            }
        });
        // this.props.history.push(`/edit/${id}`);
    }

    render() {
        return (
            <div className="Edit">
                    <p>Hello World!</p>
                    {/* {JSON.stringify(this.props.reduxState)} */}
                {this.props.reduxState.setEntryDetailsReducer && 
                    <input
                        type="text"
                        onChange={(event) => this.handleChange(event, 'description')}
                        defaultValue={this.props.reduxState.setEntryDetailsReducer.journal_text} />
                    
                    }
                    {/* {this.props.reduxState.setEntryDetailsReducer.id} */}
                <button onClick={() => this.cancelEdit(this.props.setEntryDetailsReducer.id)} >Cancel</button>
                <button onClick={() => this.saveEdit()} >Save</button>
               
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.selectedMovieDetailsReducer, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(Edit));
