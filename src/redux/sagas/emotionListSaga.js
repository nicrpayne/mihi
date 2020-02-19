import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_EMOTIONS" in component didmount
function* emotionListSaga() {
    yield takeLatest('FETCH_PRIMARY_EMOTIONS', fetchEmotions)
}

function* fetchEmotions() {
    // console.log('in fetchEmotions');

    try {
        //makes axios request to server for emotions list
        const response = yield axios.get('/api/emotions');

        yield put({ type: 'SET_EMOTIONS', payload: response.data })
        // console.log(response.data);
    } catch (error) {
        console.log('emotions GET request failed', error);
    }
}


export default emotionListSaga;
