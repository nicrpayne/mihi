import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { array } from 'prop-types';



class JournalEntryItem extends Component {

    // componentDidMount() {
    //     // console.log('in PrimaryEmotionsList - ComponentDidMount');

    //     this.props.dispatch({ type: 'FETCH_PRIMARY_EMOTIONS' })
    // };

    handleClick = () => {
        // console.log('Delete Entry Clicked ');

        this.props.dispatch({
            type: 'DELETE_ENTRY',
            payload: this.props.reduxState.setEntryDetailsReducer.id

        })
        
        this.props.history.push(`/entries`);
    }

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.setEntryDetailsReducer)}</p> */}
                <ul>
                    <li>{this.props.reduxState.setEntryDetailsReducer.pname}, {this.props.reduxState.setEntryDetailsReducer.sname}, {this.props.reduxState.setEntryDetailsReducer.tname}</li>
                   <br></br>
                    <li>{this.props.reduxState.setEntryDetailsReducer.date}, {this.props.reduxState.setEntryDetailsReducer.location}</li>
                    <br></br>
                    <li>{this.props.reduxState.setEntryDetailsReducer.journal_text}</li>
                    <li>{this.props.reduxState.setEntryDetailsReducer.id}</li>
                </ul>
                <button onClick={() => this.handleClick()}>DELETE ENTRY</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(JournalEntryItem)

