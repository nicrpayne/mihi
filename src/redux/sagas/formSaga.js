import axios from 'axios'
import { takeEvery } from 'redux-saga/effects';

function* formSaga() {
    yield takeEvery('POST_ENTRY', postEntry)
}

function* postEntry(action) {
    // console.log('in postEntrysaga', action.payload)
    
    try {  
        yield axios.post(`/api/entry`, action.payload)
    }   catch (error) {
        console.log('Error in postEntry saga: ', error);
    }
}

export default formSaga