import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { array } from 'prop-types';
const moment = require('moment');



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
        
        this.props.history.push(`/home`);
    }
    
    // Dispatch action to get details from server
    editDetails = (id) => {
        this.props.dispatch({
            type: 'GET_ENTRY_DETAILS',
            payload: id
        })
        this.props.history.push(`/edit/${id}`)
    }
  

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.setEntryDetailsReducer)}</p> */}
                
                    <p>{this.props.reduxState.setEntryDetailsReducer.pname}, {this.props.reduxState.setEntryDetailsReducer.sname}, {this.props.reduxState.setEntryDetailsReducer.tname}</p>
                   <br></br>
                    <p>{moment(this.props.reduxState.setEntryDetailsReducer.date).fromNow()}, {this.props.reduxState.setEntryDetailsReducer.location}</p>
                    <p>{moment(this.props.reduxState.setEntryDetailsReducer.date).format('LL')}</p>
                    <br></br>
                    <p>{this.props.reduxState.setEntryDetailsReducer.journal_text}</p>
                    <p>{this.props.reduxState.setEntryDetailsReducer.id}</p>
                
                <button onClick={() => this.handleClick()}>DELETE ENTRY</button>
                <button onClick={(id) => this.editDetails(this.props.reduxState.setEntryDetailsReducer.id)} >EDIT</button>
             
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(JournalEntryItem)

