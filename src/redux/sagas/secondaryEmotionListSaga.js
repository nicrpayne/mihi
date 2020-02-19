import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_EMOTIONS" in component didmount
function* secondaryEmotionListSaga() {
    yield takeLatest('FETCH_SECONDARY_EMOTIONS', fetchSecondaryEmotions)
}

function* fetchSecondaryEmotions(action) {
    console.log('in fetchSecondaryEmotions', action.payload);

    try {
        //makes axios request to server for emotions list
        const response = yield axios.get(`/api/emotions2/${action.payload}`);
        // console.log('made it to Saga get', action.payload);
        
        yield put({ type: 'SET_SECONDARY_EMOTIONS', payload: response.data })
        console.log(response.data);
    } catch (error) {
        console.log('selected primary emotion GET request failed', error);
    }
}


export default secondaryEmotionListSaga;

