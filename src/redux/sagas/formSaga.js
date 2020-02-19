import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects';

function* formSaga() {
    yield takeEvery('POST_ENTRY', postEntry)
}

function* postEntry(action) {
    console.log('in postEntrysaga', action.payload)
    let response = yield axios.post(`/api/entry`, action.payload)
    
}

// function* fetchBooks() {
//     try {
//         let response = yield axios.get('/api/shelf')
//         console.log(response.data)
//         yield put({ type: 'SET_BOOKS', payload: response.data })

//     }
//     catch (error) {
//         console.log('Error getting books', error)
//     }
// }


export default formSaga