import React, { Component } from 'react';
import { connect } from 'react-redux';
const moment = require('moment');

class JournalEntries extends Component {
    // state = {
    //     firstname: '',
    //     lastname: '',
    //     username: '',
    //     password: '',
    // };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ENTRIES' })

    };
    handleClick = (entry) => {
        console.log('getEntryDetails clicked with id: ', entry.id);
        this.props.dispatch({
            type: 'GET_ENTRY_DETAILS',
            payload: entry.id
        })
        this.props.history.push(`/journalentry/${entry.id}`);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.reduxState.setEntriesReducer.map(entry =>
                        <li key={entry.id}>
                            <div>

                                <p onClick={() => this.handleClick(entry)}>{moment(entry.date).format('LL')}, {entry.location}</p>
                                <p>{entry.pname}, {entry.sname}, {entry.tname}</p>

                                {/* <p>{entry.journal_text}</p> */}
                            </div>

                        </li>
                    )}
                </ul>
            </div>
        );
    }
}


// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(JournalEntries);

