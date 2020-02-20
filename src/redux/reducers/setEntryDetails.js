const setEntryDetailsReducer = (state = {}, action) => {
    // console.log('in setTertiaryEmotions', action.payload);

    switch (action.type) {
        case 'SET_ENTRY_DETAILS':
            return action.payload;

        default:
            return state;
    }

};

// loginMode will be on the redux state at:
// state.loginMode
export default setEntryDetailsReducer;