const setEntries = (state = [], action) => {
    // console.log('in setEntries', action.payload);

    switch (action.type) {
        case 'SET_ENTRIES':
            return action.payload;
            
        default:
            return state;
    }
    
};

// loginMode will be on the redux state at:
// state.loginMode
export default setEntries;