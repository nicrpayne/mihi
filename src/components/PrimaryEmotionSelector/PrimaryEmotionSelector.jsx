import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { array } from 'prop-types';



class PrimaryEmotionSelector extends Component {

    componentDidMount() {
        console.log('in PrimaryEmotionsList - ComponentDidMount');
        
        this.props.dispatch({ type: 'FETCH_PRIMARY_EMOTIONS' })
    };

    state = {
        primarySelection: {
            emotionId: '',
           
        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log(event.target.value)
        this.setState({
            emotionId: {
                ...this.state.primarySelection,
                [propertyName]: event.target.value
            }
        })
    }

    handleClick = (id) => {
        // event.preventDefault()
        
        this.props.history.push(`/emotions2`)
      
    }



    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.emotionListReducer)}</p> */}
                <ul>
                  {this.props.reduxState.emotionListReducer.map(emotion =>
                    <li key={emotion.id}>
                            <p onClick={this.handleClick} >{emotion.name}</p>
                            {/* <p>{JSON.stringify(emotion.jsonb_agg)}</p> */}
                            {/* {emotion.jsonb_agg.map(secondaryEmotion =>
                            <li key={secondaryEmotion.id}>
                                <p>{secondaryEmotion.secondary_name}</p>
                                </li>
                                
                                )} */}
                             
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

                