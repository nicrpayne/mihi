import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_EMOTIONS" in component didmount
function* secondaryEmotionListSaga() {
    yield takeLatest('FETCH_SECONDARY_EMOTIONS', fetchSecondaryEmotions)
}

function* fetchSecondaryEmotions() {
    console.log('in fetchSecondaryEmotions');

    try {
        //makes axios request to server for emotions list
        const response = yield axios.get('/api/secondaryemotions');

        yield put({ type: 'SET_SECONDARY_EMOTIONS', payload: response.data })
        console.log(response.data);
    } catch (error) {
        console.log('secondary emotions GET request failed', error);
    }
}


export default secondaryEmotionListSaga;
