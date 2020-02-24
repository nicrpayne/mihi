import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import PrimaryEmotionItem from '../PrimaryEmotionItem/PrimaryEmotionItem';
import HorizontalNonLinearAlternativeLabelStepper from '../Stepper/Stepper'





class PrimaryEmotionSelector extends Component {

    componentDidMount() {
        // console.log('in PrimaryEmotionsList - ComponentDidMount');

        this.props.dispatch({ type: 'FETCH_PRIMARY_EMOTIONS' })
    };

    // state = {
    //     feelsOne: ''

    // }

    render() {
        return (
            <div>
                {/* <HorizontalNonLinearAlternativeLabelStepper/> */}
                <h1 className="EmotionList-Header">Primary Emotions</h1>
                <Grid
                    className="grid"
                    container direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                
                    {this.props.reduxState.emotionListReducer.map(emotion =>
                        <PrimaryEmotionItem key={emotion.id} emotion={emotion}/>
                    )}
                </Grid>
          
            </div>

        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(PrimaryEmotionSelector)






