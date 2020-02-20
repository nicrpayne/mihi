import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_EMOTIONS" in component didmount
function* getEntrySaga() {
    yield takeLatest('GET_ENTRY_DETAILS', getEntryDetails)
}

function* getEntryDetails(action) {
    console.log('in getEntryDetails', action.payload);


        try {
            //makes axios request to server for emotions list
            const response = yield axios.get(`/api/details/${action.payload}`);
            // console.log('made it to getEntryDetail Saga get', action.payload);

            yield put({ type: 'SET_ENTRY_DETAILS', payload: response.data[0] })
            console.log(response.data);
        } catch (error) {
            console.log('entryDetails GET request failed', error);
        }
    
}


export default getEntrySaga;
