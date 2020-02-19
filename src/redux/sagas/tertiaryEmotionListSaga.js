import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_EMOTIONS" in component didmount
function* tertiaryEmotionListSaga() {
    yield takeLatest('FETCH_TERTIARY_EMOTIONS', fetchTertiaryEmotions)
}

function* fetchTertiaryEmotions(action) {
    console.log('in fetchTertiaryEmotions', action.payload);

    try {
        //makes axios request to server for emotions list
        const response = yield axios.get(`/api/emotions3/${action.payload}`);

        yield put({ type: 'SET_TERTIARY_EMOTIONS', payload: response.data })
        console.log(response.data);
    } catch (error) {
        console.log('tertiary emotions GET request failed', error);
    }
}


export default tertiaryEmotionListSaga;
