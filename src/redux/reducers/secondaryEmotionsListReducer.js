const secondaryEmotionsListReducer = (state = [], action) => {
    console.log('in setSecondaryEmotions', action.payload);

    switch (action.type) {
        case 'SET_SECONDARY_EMOTIONS':
            return action.payload;

        default:
            return state;
    }

};

// loginMode will be on the redux state at:
// state.loginMode
export default secondaryEmotionsListReducer;