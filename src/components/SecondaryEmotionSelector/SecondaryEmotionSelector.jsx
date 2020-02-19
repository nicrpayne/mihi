import React, { Component } from 'react';
import { connect } from 'react-redux'



class SecondaryEmotionSelector extends Component {

    

    handleClick = (id) => {
        // event.preventDefault()
        // console.log('primary emotion clicked with id: ', id);
        this.props.dispatch({
            type: 'FETCH_TERTIARY_EMOTIONS',
            payload: id

        })
        this.props.history.push(`/emotions3/${id}`);
    }
    

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.secondaryEmotionsListReducer)}</p> */}
                <ul>
                    {this.props.reduxState.secondaryEmotionsListReducer.map(emotion =>
                        <li key={emotion.id}>
                            <p onClick={() => this.handleClick(emotion.id)} >{emotion.name}</p>
                            

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