import React, { Component } from 'react';
import { connect } from 'react-redux'



class SecondaryEmotionSelector extends Component {

    componentDidMount() {
        console.log('in SecondaryEmotionSelector - ComponentDidMount');

        this.props.dispatch({ type: 'FETCH_SECONDARY_EMOTIONS' })
    };


    state = {
        secondarySelection: {
            emotionId: '',

        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            emotionId: {
                ...this.state.secondarySelection,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick = (event) => {
        // event.preventDefault()
        
            this.props.history.push('/emotions3')
            // this.props.dispatch({
            //     type: 'FETCH_SECONDARY_EMOTIONS',
            //     payload: this.state.secondarySelection


            // })
        }
    

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.secondaryEmotionsListReducer)}</p> */}
                <ul>
                    {this.props.reduxState.secondaryEmotionsListReducer.map(emotion =>
                        <li key={emotion.id}>
                            <p onClick={this.handleClick} >{emotion.name}</p>
                    
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