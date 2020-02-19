import React, { Component } from 'react';
import { connect } from 'react-redux'



class TertiaryEmotionSelector extends Component {

  

    handleClick = (emotion) => {
       
        this.props.dispatch({
            type: 'TERTIARY_EMOTION_ENTRY',
            payload: emotion
        })

        this.props.history.push('/form')   
    }


    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.tertiaryEmotionsListReducer)}</p> */}
                <ul>
                    {this.props.reduxState.tertiaryEmotionsListReducer.map(emotion =>
                        <li key={emotion.id}>
                            <p onClick={() => { this.handleClick(emotion)}}>{emotion.name}</p>

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

export default connect(mapStateToProps)(TertiaryEmotionSelector)