

const displayEmotionEntriesReducer = (state = {primary: '', secondary: '', tertiary: ''}, action) => {
    // console.log('in displayEmotionEntriesReducer', action.payload);
    if (action.type === 'PRIMARY_EMOTION_ENTRY') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            primary: action.payload
        }
    }
    if (action.type === 'SECONDARY_EMOTION_ENTRY') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            secondary: action.payload
        }
    }
    if (action.type === 'TERTIARY_EMOTION_ENTRY') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            tertiary: action.payload
        }
    } 
    return state;
}

export default displayEmotionEntriesReducer ; 

