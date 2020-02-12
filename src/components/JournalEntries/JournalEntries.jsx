import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalEntries extends Component {
    // state = {
    //     firstname: '',
    //     lastname: '',
    //     username: '',
    //     password: '',
    // };

componentDidMount() {
this.props.dispatch ({type: 'FETCH_ENTRIES'})
};
    // handleInputChangeFor = propertyName => (event) => {
    //     this.setState({
    //         [propertyName]: event.target.value,
    //     });
    // }

    render() {
        return (
            <div>
            <p>
                {JSON.stringify(this.props.state.setEntriesReducer)}
            </p>
                <center>
                    <button
                        type="button"
                        className="link-button"
                        // onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
                    >
                        Login
          </button>
                </center>
            </div>
        );
    }
}


// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
   state
});

export default connect(mapStateToProps)(JournalEntries);

