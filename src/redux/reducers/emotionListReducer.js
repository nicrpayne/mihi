const emotionsListReducer = (state = [], action) => {
    console.log('in setEmotions', action.payload);

    switch (action.type) {
        case 'SET_EMOTIONS':
            return action.payload;

        default:
            return state;
    }

};

// loginMode will be on the redux state at:
// state.loginMode
export default emotionsListReducer;