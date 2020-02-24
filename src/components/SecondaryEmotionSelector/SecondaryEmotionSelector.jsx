import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SecondaryEmotionItem from '../SecondaryEmotionItem/SecondaryEmotionItem'



class SecondaryEmotionSelector extends Component {

    //Moved to SecondaryEmotionItem
    // handleClick = (emotion) => {
    //     // event.preventDefault()
    //     // console.log('primary emotion clicked with id: ', id);
    //     this.props.dispatch({
    //         type: 'FETCH_TERTIARY_EMOTIONS',
    //         payload: emotion.id

    //     })
    //     this.props.dispatch({
    //         type: 'SECONDARY_EMOTION_ENTRY',
    //         payload: emotion
    //     })
    //     this.props.history.push(`/emotions3/${emotion.id}`);
    // }
    

    render() {
        return (
            <div>
                <h1 className="EmotionList-Header">dig a little</h1>
                <Grid
                    className="grid"
                    container direction="row"
                    justify="flex-start"
                    alignItems="flex-start">

                    {this.props.reduxState.secondaryEmotionsListReducer.map(emotion =>
                        <SecondaryEmotionItem key={emotion.id} emotion={emotion} />
                    )}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(SecondaryEmotionSelector)