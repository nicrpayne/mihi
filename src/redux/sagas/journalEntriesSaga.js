import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// fetch Saga: will be fired on "FETCH_ENTRIES" in component didmount
function* journalEntriesSaga(){
    yield takeEvery('FETCH_ENTRIES', fetchEntries)
}

function* fetchEntries() {
    // console.log('in fetchEntries');
    
    try {
        //makes axios request to server for journal entries
        const response = yield axios.get('/api/entries');
      
        yield put({ type: 'SET_ENTRIES', payload: response.data });
    } catch (error) {
        console.log('entries GET request failed', error);
    }
}


export default journalEntriesSaga;
