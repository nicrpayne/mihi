import React, { Component } from 'react';
import { connect } from 'react-redux'



class TertiaryEmotionSelector extends Component {



    handleClick = (id) => {
        // event.preventDefault()

        this.props.history.push('/form')
        // this.props.dispatch({
        //     type: 'FETCH_SECONDARY_EMOTIONS',
        //     payload: this.state.secondarySelection


        // })
    }


    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.tertiaryEmotionsListReducer)}</p> */}
                <ul>
                    {this.props.reduxState.tertiaryEmotionsListReducer.map(emotion =>
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

export default connect(mapStateToProps)(TertiaryEmotionSelector)