import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TertiaryEmotionItem from '../TertiaryEmotionItem/TertiaryEmotionItem'
import HorizontalNonLinearAlternativeLabelStepper from '../Stepper/Stepper'



class TertiaryEmotionSelector extends Component {

  

    // handleClick = (emotion) => {
       
    //     this.props.dispatch({
    //         type: 'TERTIARY_EMOTION_ENTRY',
    //         payload: emotion
    //     })

    //     this.props.history.push('/form')   
    // }


    render() {
        return (
            <div>
                {/* <HorizontalNonLinearAlternativeLabelStepper/> */}
                <h1 className="EmotionList-Header">just a little more</h1>
                <Grid
                    className="grid"
                    container direction="row"
                    justify="flex-start"
                    alignItems="flex-start">

                    {this.props.reduxState.tertiaryEmotionsListReducer.map(emotion =>
                        <TertiaryEmotionItem key={emotion.id} emotion={emotion} />
                    )}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(TertiaryEmotionSelector)