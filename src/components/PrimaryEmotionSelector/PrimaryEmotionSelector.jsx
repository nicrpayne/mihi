import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { array } from 'prop-types';



class PrimaryEmotionSelector extends Component {

    componentDidMount() {
        // console.log('in PrimaryEmotionsList - ComponentDidMount');
        
        this.props.dispatch({ type: 'FETCH_PRIMARY_EMOTIONS' })
    };

    // state = {
    //     feelsOne: ''

    // }

    

    handleClick = (emotion) => {
        // console.log('primary emotion clicked with id: ', emotion);

        this.props.dispatch({
            type: 'FETCH_SECONDARY_EMOTIONS',
            payload: emotion.id
            
        })
        this.props.dispatch({
            type: 'PRIMARY_EMOTION_ENTRY',
            payload: emotion
        })
        this.props.history.push(`/emotions2/${emotion.id}`);
    }



    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.emotionListReducer)}</p> */}
                <ul>
                  {this.props.reduxState.emotionListReducer.map(emotion =>
                    <li key={emotion.id}>
                           
                          <p onClick={() => {this.handleClick(emotion)}}>{emotion.name}</p>
                           
                             
                      </li>
                    )}  
                </ul>
            </div>
        )
    }                
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(PrimaryEmotionSelector)

                