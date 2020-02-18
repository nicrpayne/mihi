import React, { Component } from 'react';
import { connect } from 'react-redux'



class PrimaryEmotionSelector extends Component {

    componentDidMount() {
        console.log('in PrimaryEmotionsList - ComponentDidMount');
        
        this.props.dispatch({ type: 'FETCH_EMOTIONS' })
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

    handleClick = (event) => {
        event.preventDefault()
        let field = this.state.feels;
        
        if (field === "") {
            alert("Please pick an emotion to move ahead")
        } else {
            this.props.history.push('/SecondaryEmotion')
        this.props.dispatch({
            type: 'STORE_PRIMARY_ID',
            payload: this.state.primarySelection


        })
    }
}

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.emotionListReducer)}</p> */}
                <ul>
                  {this.props.reduxState.emotionListReducer.map(emotion =>
                    <li key={emotion.id}>
                            <p>{emotion.name}</p>
                            <p>{JSON.stringify(emotion.jsonb_agg)}</p>
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

                