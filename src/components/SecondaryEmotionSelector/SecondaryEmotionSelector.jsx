import React, { Component } from 'react';
import { connect } from 'react-redux'



class SecondaryEmotionSelector extends Component {

   

    handleClick = (emotion) => {
        // event.preventDefault()
        // console.log('primary emotion clicked with id: ', id);
        this.props.dispatch({
            type: 'FETCH_TERTIARY_EMOTIONS',
            payload: emotion.id

        })
        this.props.dispatch({
            type: 'SECONDARY_EMOTION_ENTRY',
            payload: emotion
        })
        this.props.history.push(`/emotions3/${emotion.id}`);
    }
    

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.secondaryEmotionsListReducer)}</p> */}
                <ul>
                    {this.props.reduxState.secondaryEmotionsListReducer.map(emotion =>
                        <li key={emotion.id}>
                            <p onClick={() => { this.handleClick(emotion) }}>{emotion.name}</p>
                            

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

export default connect(mapStateToProps)(SecondaryEmotionSelector)