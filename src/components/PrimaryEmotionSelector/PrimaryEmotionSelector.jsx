import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { array } from 'prop-types';



class PrimaryEmotionSelector extends Component {

    componentDidMount() {
        console.log('in PrimaryEmotionsList - ComponentDidMount');
        
        this.props.dispatch({ type: 'FETCH_PRIMARY_EMOTIONS' })
    };

    

    handleClick = (id) => {
        // event.preventDefault()
        // console.log('primary emotion clicked with id: ', id);
        this.props.dispatch({
            type: 'FETCH_SECONDARY_EMOTIONS',
            payload: id
            
        })
        this.props.history.push(`/emotions2/${id}`);
    }



    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.emotionListReducer)}</p> */}
                <ul>
                  {this.props.reduxState.emotionListReducer.map(emotion =>
                    <li key={emotion.id}>
                            <p onClick={() => this.handleClick(emotion.id)} >{emotion.name}</p>
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

                